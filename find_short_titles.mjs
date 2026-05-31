import fs from 'fs';
import path from 'path';

const dir = '/Users/sakshi/Documents/projects/reputation360/src/data/blogs/pack20';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  lines.forEach(line => {
    const match = line.match(/title:\s*"([^"]+)"/);
    if (match) {
      const title = match[1];
      const words = title.split(' ').length;
      if (words <= 5) {
        console.log(`[${file}] ${title}`);
      }
    }
  });
});
