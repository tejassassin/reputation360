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

function replaceEmDashes(filePath) {
  if (!/\.(jsx?|mdx?)$/.test(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Heading tags: <h1... > ... </h1>
  content = content.replace(/(<h[1-4][^>]*>)([\s\S]*?)(<\/h[1-4]>)/gi, (match, open, inner, close) => {
    return open + inner.replace(/—/g, '-') + close;
  });

  // 2. <title> tag
  content = content.replace(/(<title[^>]*>)([\s\S]*?)(<\/title>)/gi, (match, open, inner, close) => {
    return open + inner.replace(/—/g, '-') + close;
  });

  // 3. title prop / key
  content = content.replace(/(title\s*[:=]\s*(?:\{?))(["'`])([\s\S]*?)\2(\}?)/gi, (match, prefix, quote, inner, suffix) => {
    return prefix + quote + inner.replace(/—/g, '-') + quote + suffix;
  });

  // 4. description prop / key
  content = content.replace(/(description\s*[:=]\s*(?:\{?))(["'`])([\s\S]*?)\2(\}?)/gi, (match, prefix, quote, inner, suffix) => {
    return prefix + quote + inner.replace(/—/g, '-') + quote + suffix;
  });

  // 5. content prop (for <meta content="...">)
  content = content.replace(/(content\s*[:=]\s*(?:\{?))(["'`])([\s\S]*?)\2(\}?)/gi, (match, prefix, quote, inner, suffix) => {
    return prefix + quote + inner.replace(/—/g, '-') + quote + suffix;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    count++;
  }
}

walkDir('./src', replaceEmDashes);
console.log(`Total files updated: ${count}`);
