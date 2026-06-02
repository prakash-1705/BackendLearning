// FileSystem Module
const fs = require('fs');
fs.writeFileSync("dummy.txt","Hello This one is a  dummy sentence");

const os = require('os');
console.log(os.platform());
console.log(os.cpus());
console.log(os.hostname());
//gives the path 
console.log(process.cwd());
//process id 
console.log(process.pid);