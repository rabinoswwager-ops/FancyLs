// WRITE YOUR CODE HERE
const fs =require('fs');
const path =require ('path');
if (process.argv.length !==3){
  console.log ('Missing argument');
  console.log(`Usage: node ${path.basename(__filename)}<directory>`);
  return;
}
dirPath =path.resolve(process.argv[2]);
const dirContent =fs.readdirSync(process.argv[2]);
for (const name of dirContent){
  const fullPath =path.join( dirPath, name);
  console.log(fullPath);
  fs.appendFileSync("output.txt", `${name}\n`)
}