// Node.js script to list all .tsx files in 'pages' or 'src/pages'
import fs from 'fs';
import path from 'path';

function findPages(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(findPages(fullPath));
    } else if (file.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const pagesDirs = ['pages', 'src/pages'];
pagesDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Pages in ${dir}:`);
    findPages(dir).forEach(page => console.log(page));
  }
});