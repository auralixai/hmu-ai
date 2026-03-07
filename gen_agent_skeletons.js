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

const industries = [
  { slug: "e-commerce", name: "E-Commerce Stores" },
  { slug: "real-estate", name: "Real Estate Agents" },
  { slug: "marketing-agencies", name: "Marketing Agencies" },
  { slug: "content-creators", name: "Content Creators" },
  { slug: "saas-founders", name: "Solo SaaS Founders" },
  { slug: "consultants", name: "Independent Consultants" },
  { slug: "freelance-developers", name: "Freelance Developers" },
  { slug: "online-coaches", name: "Online Coaches" }
];

const DIR = path.join(__dirname, 'src/data/agents');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function generateForIndustry(industry) {
  console.log(`Generating agents for ${industry.name}...`);
  const prompt = `You are an expert AI product manager. 
We need exactly 65 highly specific, hyper-focused AI agent tasks for the industry: "${industry.name}".
These tasks should be split evenly across our 4 core agent pillars: Architect, Builder, Money, Operator.

CRITICAL: Output ONLY Token-Oriented Object Notation (TOON). No markdown, no JSON, no formatting.
Format exactly like this for each agent (one per line):
<Task Name>|<Agent Pillar>

Example:
Lead Qualification|Operator
MLS Data Scraping|Builder
Escrow Timeline Tracking|Money
Drip Campaign Strategy|Architect

Generate exactly 65 distinct, highly practical tasks for ${industry.name}:`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.includes('|'));
  const agents = [];

  lines.forEach(line => {
    const [taskName, agentTypeRaw] = line.split('|');
    if (!taskName || !agentTypeRaw) return;
    
    let type = agentTypeRaw.trim();
    if (!['Architect', 'Builder', 'Money', 'Operator'].includes(type)) {
       // fallback normalize
       if (type.toLowerCase().includes('architect')) type = 'Architect';
       else if (type.toLowerCase().includes('build')) type = 'Builder';
       else if (type.toLowerCase().includes('money')) type = 'Money';
       else type = 'Operator';
    }

    const task = taskName.trim();
    // E.g., Lead Qualification -> lead-qualification-operator
    const slug = `${slugify(task)}-${type.toLowerCase()}`;

    agents.push({
      slug,
      industrySlug: industry.slug,
      agentType: type,
      taskName: task
    });
  });

  const tsContent = `import { AgentUseCase } from '../agents';\n\nexport const ${industry.slug.replace(/-/g, '')}Agents: AgentUseCase[] = ${JSON.stringify(agents, null, 2)};\n`;
  fs.writeFileSync(path.join(DIR, `${industry.slug}.ts`), tsContent);
  console.log(`✅ Saved ${agents.length} agents for ${industry.name}`);
}

async function run() {
  for (const ind of industries) {
    try {
      await generateForIndustry(ind);
      await new Promise(r => setTimeout(r, 2000));
    } catch(e) {
      console.error(`Failed ${ind.name}`, e);
    }
  }
  
  // Create index file
  let imports = industries.map(ind => `import { ${ind.slug.replace(/-/g, '')}Agents } from './agents/${ind.slug}';`).join('\n');
  let arrayConcat = industries.map(ind => `...${ind.slug.replace(/-/g, '')}Agents`).join(',\n  ');
  
  let indexContent = fs.readFileSync(path.join(__dirname, 'src/data/agents.ts'), 'utf8');
  // replace the dummy array
  indexContent = indexContent.replace(/export const agentUseCases: AgentUseCase\[\] = \[[\s\S]*?\];/, `export const agentUseCases: AgentUseCase[] = [\n  ${arrayConcat}\n];`);
  
  const finalTs = `${imports}\n\n${indexContent}`;
  fs.writeFileSync(path.join(__dirname, 'src/data/agents.ts'), finalTs);
  console.log("🎉 All industries scaffolded and index updated!");
}

run();
