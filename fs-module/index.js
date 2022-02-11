// 1 
// now let's use the node built in modules. we will use fs a file system module to intract with node 

const fs = require('fs')

// now fs has all methods and data needed to work with file systems

// 2
const output = fs.readFileSync('data.txt', 'utf-8')
console.log(output);
// with the help of readFileSync we can read file syncronously hear all functions with Sync is work syncronously and others work asynchronously (readFile)

// 3
// we can also right to files 
fs.writeFileSync('data.txt', `updated at : ${Date.now()}`)