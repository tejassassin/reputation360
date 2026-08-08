import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let count = 0;

function replaceSeven(filePath) {
  if (!/\.(jsx?|mdx?)$/.test(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace 'seven' with '7' globally and case-insensitively
  content = content.replace(/\bseven\b/gi, '7');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    count++;
  }
}

walkDir('./src', replaceSeven);
console.log(`Total files updated: ${count}`);
