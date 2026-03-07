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

const DIR = path.join(__dirname, 'src/data/agents');

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timeout after " + ms + "ms")), ms);
    promise.then(val => { clearTimeout(timer); resolve(val); })
           .catch(err => { clearTimeout(timer); reject(err); });
  });
}

async function processBatch(agentsBatch, industryName) {
  const agentNames = agentsBatch.map(a => `${a.slug} (${a.taskName} - ${a.agentType})`).join('\n');
  
  const prompt = `You are an expert AI product manager and SEO copywriter. 
Expand these AI agent setups for the industry: ${industryName}.

For each agent slug provided, generate:
1. Command Example (COMMAND): A copy-paste prompt the user types to start this agent.
2. 4-6 Benefits (BENEFITS): Bullet points showing ROI.
3. Sample Output (OUTPUT): A raw text mockup of what the agent outputs/does.
4. Integration (INTEGRATION): 1 paragraph on how it fits into the broader 4-pillar system.
5. FAQs (FAQ_Q / FAQ_A): 2 frequently asked questions and answers.

CRITICAL: Use Token-Oriented Object Notation (TOON). Do NOT output JSON. Format EXACTLY like this for each agent:
---
SLUG: <Agent Slug>
COMMAND: <The prompt>
BENEFITS: <Benefit 1> | <Benefit 2> | <Benefit 3> | <Benefit 4>
OUTPUT: <Mockup text>
INTEGRATION: <Paragraph>
FAQ_Q: <Question 1>
FAQ_A: <Answer 1>
FAQ_Q: <Question 2>
FAQ_A: <Answer 2>
---

Agents to process:
${agentNames}`;

  const result = await withTimeout(model.generateContent(prompt), 120000);
  const responseText = result.response.text();

  const blocks = responseText.split('---').filter(b => b.trim().length > 10);
  const updates = {};

  blocks.forEach(block => {
    const slugMatch = block.match(/SLUG:\s*(.+)/);
    const cmdMatch = block.match(/COMMAND:\s*(.+)/);
    const benMatch = block.match(/BENEFITS:\s*(.+)/);
    const outMatch = block.match(/OUTPUT:\s*([\s\S]*?)INTEGRATION:/);
    const intMatch = block.match(/INTEGRATION:\s*(.+)/);
    
    // Extract multiple FAQs
    const qs = [...block.matchAll(/FAQ_Q:\s*(.+)/g)].map(m => m[1].trim());
    const as = [...block.matchAll(/FAQ_A:\s*(.+)/g)].map(m => m[1].trim());
    const faqs = qs.map((q, i) => ({ question: q, answer: as[i] || "" }));

    if (slugMatch && cmdMatch) {
      updates[slugMatch[1].trim()] = {
        commandExample: cmdMatch[1].trim(),
        benefits: benMatch ? benMatch[1].split('|').map(e => e.trim()) : [],
        sampleOutput: outMatch ? outMatch[1].trim() : "",
        integrationDetails: intMatch ? intMatch[1].trim() : "",
        faqs: faqs
      };
    }
  });

  return updates;
}

async function run() {
  const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts'));

  for (const file of files) {
    const industrySlug = file.replace('.ts', '');
    const filePath = path.join(DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const arrayMatch = content.match(/export const \w+Agents: AgentUseCase\[\] = (\[[\s\S]+\]);/);
    if (!arrayMatch) continue;

    let agents;
    try {
      agents = eval(arrayMatch[1]);
    } catch (e) {
      console.error(`Skipping ${file} - Parse error`);
      continue;
    }

    const pendingAgents = agents.filter(a => !a.seoData);
    if (pendingAgents.length === 0) {
      console.log(`✅ ${file} is fully expanded.`);
      continue;
    }

    console.log(`⏳ Expanding ${pendingAgents.length} agents in ${file}...`);
    
    for (let i = 0; i < pendingAgents.length; i += 5) {
      const batch = pendingAgents.slice(i, i + 5);
      console.log(`Processing batch ${Math.floor(i / 5) + 1}...`);
      
      try {
        const expandedData = await processBatch(batch, industrySlug);
        
        batch.forEach(agent => {
          if (expandedData[agent.slug]) {
            agent.seoData = expandedData[agent.slug];
          } else {
             console.warn(`Missing data for ${agent.slug}, skipping for now.`);
          }
        });

        // Use regex to get the export name
        const exportNameMatch = content.match(/export const (\w+Agents):/);
        const exportName = exportNameMatch ? exportNameMatch[1] : `${industrySlug.replace(/-/g, '')}Agents`;

        const updatedTs = `import { AgentUseCase } from '../agents';\n\nexport const ${exportName}: AgentUseCase[] = ${JSON.stringify(agents, null, 2)};\n`;
        fs.writeFileSync(filePath, updatedTs);
        
        await new Promise(r => setTimeout(r, 2000));
      } catch (err) {
        console.error(`Batch failed!`, err.message);
        process.exit(1);
      }
    }
  }
  console.log("🎉 All agents expanded!");
}

run();
