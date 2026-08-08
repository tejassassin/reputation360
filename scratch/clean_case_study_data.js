import fs from 'fs';
import path from 'path';

const dir = "/Users/sakshi/Documents/projects/reputation360/src/data/caseStudies";
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.js')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes("Starting Position: ")) {
      content = content.replaceAll("Starting Position: ", "");
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated data file: ${file}`);
    }
  }
}
