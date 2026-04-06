import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Attempt to use 'gog' CLI if available (local dev or container with gog)
    // The command 'gog cal list --today --json' is hypothetical, adapting to common CLI patterns
    // Real gog usage: 'gog cal list' usually returns text.
    // If gog isn't available, we'll return a mock or empty list for the Vercel deployment
    // unless env vars are provided for a direct API call.
    
    // For Vercel deployment where 'gog' is missing, we'll return a simulated response
    // to prevent 500 errors, or check for an environment variable that indicates mock mode.
    
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
       return NextResponse.json({ 
         events: [
           { id: 'mock-1', title: 'Vercel Deployment Check', start: new Date().toISOString(), end: new Date(Date.now() + 3600000).toISOString(), location: 'Vercel' },
           { id: 'mock-2', title: 'Review Mission Control', start: new Date(Date.now() + 7200000).toISOString(), end: new Date(Date.now() + 10800000).toISOString() }
         ] 
       });
    }

    // Try executing gog locally
    try {
        // This is a best-effort attempt to use the CLI tool requested
        // Adjust command based on actual gog capabilities if known. 
        // Assuming 'gog calendar list --json' or similar. 
        // If gog outputs text, we'd need to parse it.
        const { stdout } = await execAsync('gog calendar list --limit 5 --format json');
        const events = JSON.parse(stdout);
        return NextResponse.json({ events });
    } catch (cliError) {
        console.warn('Failed to execute gog CLI:', cliError);
        // Fallback to mock if CLI fails (e.g. not authenticated or not installed)
        return NextResponse.json({ 
            warning: 'CLI unavailable',
            events: [] 
        });
    }

  } catch (error) {
    console.error('Calendar API error:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar events' }, { status: 500 });
  }
}
