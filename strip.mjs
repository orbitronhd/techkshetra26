import fs from 'fs';
import { globSync } from 'glob';
import strip from 'strip-comments';

const files = globSync('src/**/*.{ts,tsx,css,js}');

let modifiedCount = 0;

for (const file of files) {
  if (file.endsWith('Tshirts.tsx') || file.endsWith('Tshirt.tsx')) {
    console.log('Skipping', file);
    continue;
  }
  
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Use the appropriate language for strip-comments
    const lang = file.endsWith('.css') ? 'css' : 'javascript';
    
    // strip-comments removes comments. 
    // We also want to remove any leftover blank lines that contained only whitespace/comments.
    let newContent = strip(content, { language: lang, preserveNewlines: false });
    
    // Clean up multiple blank lines left behind
    newContent = newContent.replace(/^\s*[\r\n]/gm, '\n');
    
    if (content !== newContent) {
      fs.writeFileSync(file, newContent);
      console.log('Stripped comments from:', file);
      modifiedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

console.log(`\nFinished! Modified ${modifiedCount} files.`);
