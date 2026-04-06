import re

with open('scraped.txt', 'r') as f:
    text = f.read()

# Let's split it into URLs if it contains multiple sections
print(text[:2000])
