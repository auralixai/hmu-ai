import json
import subprocess
import re

def scrape_coursera_ai():
    print("Scraping Coursera AI terms...")
    cmd = ["mcporter", "call", "scrapling.get", "--output", "json", "--args", '{"url": "https://www.coursera.org/resources/ai-terms", "extraction_type": "markdown"}']
    res = subprocess.run(cmd, capture_output=True, text=True)
    
    try:
        data = json.loads(res.stdout)
        content = data.get("content", [""])[0]
    except Exception as e:
        print("Failed to parse mcporter output:", e)
        return

    # Looking for lines like ### **Term**
    # followed by the definition paragraphs until the next ###
    
    terms = []
    
    # split by ### **
    parts = content.split("### **")
    for part in parts[1:]:
        lines = part.split("\n")
        name_line = lines[0].strip()
        if name_line.endswith("**"):
            name = name_line[:-2].strip()
        else:
            name = name_line.replace("**", "").strip()
            
        definition_lines = []
        for line in lines[1:]:
            if line.startswith("###") or line.startswith("**Learn more:**") or line.startswith("**Read more:**"):
                continue
            if line.strip():
                definition_lines.append(line.strip())
        
        definition = " ".join(definition_lines).strip()
        
        # Clean up links like [text](url)
        definition = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', definition)
        
        if name and definition:
            terms.append({"name": name, "definition": definition})

    print(f"Found {len(terms)} AI terms.")
    
    # Write to ai.ts
    with open("src/data/dictionaries/ai.ts", "w") as f:
        f.write("export const aiTerms = [\n")
        for t in terms:
            name = t['name'].replace("'", "\\'")
            defn = t['definition'].replace("'", "\\'")
            f.write(f"  {{ name: '{name}', definition: '{defn}' }},\n")
        f.write("];\n")
    print("Wrote ai.ts")

scrape_coursera_ai()
