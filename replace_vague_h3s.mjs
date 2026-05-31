import fs from 'fs';
import path from 'path';

const replacements = {
  'blog08.js': [
    ['title: "Full recovery"', 'title: "Full Reputation Recovery Timeline"']
  ],
  'blog10.js': [
    ['title: "What raises red flags"', 'title: "What Raises Red Flags in Reputation Searches"'],
    ['title: "Proactive transparency"', 'title: "Proactive Transparency in Reputation Management"']
  ],
  'blog11.js': [
    ['title: "Addressing known issues proactively"', 'title: "Addressing Known Reputation Issues Proactively"']
  ],
  'blog13.js': [
    ['title: "Applied to search results"', 'title: "How the Anchoring Effect Applies to Search Results"'],
    ['title: "What this means in practice"', 'title: "What the Anchoring Effect Means in Reputation Management Practice"']
  ],
  'blog14.js': [
    ['title: "The career cost"', 'title: "The Career Cost of a Damaged Reputation"'],
    ['title: "The business cost"', 'title: "The Business Cost of a Damaged Reputation"'],
    ['title: "Why waiting makes it worse"', 'title: "Why Waiting Makes Reputation Damage Worse"'],
    ['title: "The irreversibility threshold"', 'title: "The Irreversibility Threshold in Reputation Management"']
  ],
  'blog16.js': [
    ['title: "Substantially higher returns"', 'title: "Substantially Higher Returns from Reputation Management"'],
    ['title: "Reliably zero or negative"', 'title: "Why DIY Reputation Repair is Reliably Zero or Negative"']
  ],
  'blog17.js': [
    ['title: "Speed advantage"', 'title: "The Speed Advantage of High-Authority Profiles"']
  ],
  'blog18.js': [
    ['title: "Act now"', 'title: "When to Act Now on a Reputation Threat"'],
    ['title: "Monitor or ignore"', 'title: "When to Monitor or Ignore a Reputation Issue"']
  ],
  'blog19.js': [
    ['title: "Treat every post as permanent"', 'title: "Treat Every Social Media Post as a Permanent Reputation Record"']
  ]
};

const dir = '/Users/sakshi/Documents/projects/reputation360/src/data/blogs/pack20';

for (const [file, ops] of Object.entries(replacements)) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const [target, replacement] of ops) {
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
