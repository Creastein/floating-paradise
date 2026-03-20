const fs = require('fs');
const xml = fs.readFileSync('WebEdit2026_Extracted\\word\\document.xml', 'utf-8');
const text = xml
  .replace(/<w:br[^>]*\/>/g, '\n')
  .replace(/<\/w:p>/g, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'")
  .replace(/[ \t]+/g, ' ')
  .replace(/\n /g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();
fs.writeFileSync('WebEdit2026_Extracted.txt', text);
console.log('Done');
