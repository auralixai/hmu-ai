const { execSync } = require('child_process');

const remaining = ['ai', 'legal', 'sales', 'crypto', 'dev', 'ecommerce', 'startup', 'finance'];
const now = Date.now();

remaining.forEach((dict, i) => {
  // Start from 10 seconds from now, increment by 90s (90000ms)
  const atTime = new Date(now + 10000 + i * 90000).toISOString();
  
  const payload = {
    kind: "agentTurn",
    message: `You are the Builder. Generate exactly 90 terms and definitions for the ${dict} dictionary. Overwrite \`/home/auralixai/.openclaw/workspace/hmu-ai/src/data/dictionaries/${dict}.ts\` with: \`export const ${dict}Terms = [ { name: '...', definition: '...' }, ... ];\`. Make sure definitions are concise. Do not include markdown in definitions. Output only valid TypeScript code.`,
    model: "google/gemini-3-pro-preview"
  };

  const job = {
    name: `${dict}-dictionary`,
    schedule: { kind: "at", at: atTime },
    payload: payload,
    sessionTarget: "isolated",
    enabled: true
  };

  console.log(`Scheduling ${dict} at ${atTime}...`);
  try {
    const cmd = `openclaw cron add --schedule '${JSON.stringify(job.schedule)}' --payload '${JSON.stringify(job.payload).replace(/'/g, "'\\''")}' --session-target isolated --name '${job.name}'`;
    execSync(cmd);
    console.log(`Queued ${dict}`);
  } catch (err) {
    console.error(`Failed to queue ${dict}`, err.message);
  }
});
