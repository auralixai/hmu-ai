const fs = require('fs');
const env = fs.readFileSync('.env.production', 'utf8').split('\n');
env.forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let val = match[2];
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    process.env[match[1]] = val;
  }
});
const { createClient } = require('@vercel/postgres');
async function main() {
  const client = createClient();
  await client.connect();
  try {
    const { rows } = await client.sql`SELECT * FROM waitlist_emails ORDER BY created_at DESC;`;
    console.log("Total Signups:", rows.length);
    console.log("Recent Signups:");
    rows.forEach(r => console.log(`- ${r.email} (${r.created_at})`));
  } catch (error) {
    if (error.message.includes('relation "waitlist_emails" does not exist')) {
        console.log("Total Signups: 0 (Table doesn't exist yet)");
    } else {
        console.error("Error:", error);
    }
  } finally {
    await client.end();
  }
}
main();
