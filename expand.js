const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ Please set GEMINI_API_KEY environment variable.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const DICT_DIR = path.join(__dirname, 'src/data/dictionaries');

// Simple timeout wrapper
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout after " + ms + "ms")), ms);
    promise.then(val => { clearTimeout(timer); resolve(val); })
           .catch(err => { clearTimeout(timer); reject(err); });
  });
}

async function processBatch(termsBatch) {
  const termNames = termsBatch.map(t => `${t.name}: ${t.definition}`).join('\n');
  
  const prompt = `You are an expert SEO copywriter. Expand these terms for a business/tech dictionary.
For each term, provide:
1. A detailed 2-paragraph deep dive (DESC).
2. 2-3 practical real-world examples (EXAMPLES).
3. 2-3 related terms (RELATED).

CRITICAL: Use Token-Oriented Object Notation (TOON). Do NOT output JSON. Format EXACTLY like this:
---
TERM: <Term Name>
DESC: <Paragraph 1> <Paragraph 2>
EXAMPLES: <Example 1> | <Example 2>
RELATED: <Related 1> | <Related 2>
---

Terms to process:
${termNames}`;

  const result = await withTimeout(model.generateContent(prompt), 30000); // 30s timeout
  const responseText = result.response.text();

  const blocks = responseText.split('---').filter(b => b.trim().length > 10);
  const updates = {};

  blocks.forEach(block => {
    const termMatch = block.match(/TERM:\s*(.+)/);
    const descMatch = block.match(/DESC:\s*(.+)/);
    const exMatch = block.match(/EXAMPLES:\s*(.+)/);
    const relMatch = block.match(/RELATED:\s*(.+)/);

    if (termMatch && descMatch) {
      updates[termMatch[1].trim()] = {
        detailedDescription: descMatch[1].trim(),
        examples: exMatch ? exMatch[1].split('|').map(e => e.trim()) : [],
        relatedTerms: relMatch ? relMatch[1].split('|').map(e => e.trim()) : []
      };
    }
  });

  // Check what was successfully parsed
  termsBatch.forEach(t => {
     if (!updates[t.name]) {
         console.warn(`Warning: LLM omitted term ${t.name}. Returning dummy data so we don't get stuck.`);
         updates[t.name] = {
            detailedDescription: t.definition + " (Deep dive coming soon).",
            examples: [],
            relatedTerms: []
         };
     }
  });

  return updates;
}

async function run() {
  const files = fs.readdirSync(DICT_DIR).filter(f => f.endsWith('.ts'));

  for (const file of files) {
    const dictName = file.replace('.ts', '');
    const filePath = path.join(DICT_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const arrayMatch = content.match(/export const \w+Terms = (\[[\s\S]+\]);/);
    if (!arrayMatch) continue;

    let terms;
    try {
      terms = eval(arrayMatch[1]);
    } catch (e) {
      console.error(`Skipping ${file} - Parse error`);
      continue;
    }

    const pendingTerms = terms.filter(t => !t.seoData);
    if (pendingTerms.length === 0) {
      console.log(`✅ ${file} is fully expanded.`);
      continue;
    }

    console.log(`⏳ Expanding ${pendingTerms.length} terms in ${file}...`);
    
    // Process in batches of 10
    for (let i = 0; i < pendingTerms.length; i += 10) {
      const batch = pendingTerms.slice(i, i + 10);
      console.log(`Processing batch ${Math.floor(i / 10) + 1} (${batch.map(t=>t.name).join(', ')})...`);
      
      try {
        const expandedData = await processBatch(batch);
        
        batch.forEach(term => {
          if (expandedData[term.name]) {
            term.seoData = expandedData[term.name];
          }
        });

        const updatedTs = `export const ${dictName}Terms = ${JSON.stringify(terms, null, 2)};\n`;
        fs.writeFileSync(filePath, updatedTs);
        
        await new Promise(r => setTimeout(r, 2000));
        
      } catch (err) {
        console.error(`Batch failed!`, err.message);
        process.exit(1);
      }
    }
  }
  console.log("🎉 All dictionaries expanded!");
}

run();
