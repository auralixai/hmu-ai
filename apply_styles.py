import os
import re

CSS_CONTENT = """@import "tailwindcss";

@theme {
  --color-brand-primary: #C02990;
  --color-brand-secondary: #22C55E;
  --color-brand-dark: #0E1B2B;
  --color-brand-light: #E6EAED;
  --font-gotham: 'Gotham', ui-sans-serif, system-ui, sans-serif;
}

:root {
  --background: #E6EAED;
  --foreground: #0E1B2B;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0E1B2B;
    --foreground: #E6EAED;
  }
}

body {
  background-color: var(--color-brand-light);
  color: var(--color-brand-dark);
  font-family: var(--font-gotham);
}

.dark body {
  background-color: var(--color-brand-dark);
  color: var(--color-brand-light);
}
"""

def update_css():
    with open('/home/auralixai/.openclaw/workspace/subnets-for-good/src/app/globals.css', 'w') as f:
        f.write(CSS_CONTENT)

def update_page_tsx():
    filepath = '/home/auralixai/.openclaw/workspace/subnets-for-good/src/app/page.tsx'
    with open(filepath, 'r') as f:
        content = f.read()

    # Colors
    content = content.replace('bg-slate-950', 'bg-brand-dark')
    content = content.replace('text-slate-200', 'text-brand-light/90')
    content = content.replace('text-slate-300', 'text-brand-light/80')
    content = content.replace('text-slate-400', 'text-brand-light/70')
    content = content.replace('bg-teal-500', 'bg-brand-secondary')
    content = content.replace('text-teal-400', 'text-brand-secondary')
    content = content.replace('text-teal-500', 'text-brand-secondary')
    content = content.replace('text-emerald-400', 'text-brand-secondary')
    content = content.replace('from-teal-400', 'from-brand-primary')
    content = content.replace('to-emerald-400', 'to-brand-secondary')
    content = content.replace('from-teal-900/20', 'from-brand-primary/20')
    content = content.replace('bg-slate-900/30', 'bg-[#152336]') # slightly lighter than dark navy
    content = content.replace('border-slate-800', 'border-brand-light/10')
    content = content.replace('border-slate-900', 'border-brand-light/5')
    content = content.replace('border-slate-700', 'border-brand-light/20')
    content = content.replace('text-white', 'text-brand-light')
    
    # Fonts
    content = content.replace('font-sans', 'font-gotham')
    content = content.replace('font-extrabold', 'font-medium')
    content = content.replace('font-bold', 'font-medium')
    content = content.replace('font-semibold', 'font-medium')

    with open(filepath, 'w') as f:
        f.write(content)

if __name__ == "__main__":
    update_css()
    update_page_tsx()
    print("Files updated successfully")
