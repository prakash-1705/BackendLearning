//Importing the HTTP module
const http = require('http');
//creating server , Listen() it starts the server on port 4800
// http.createServer().listen(4800);


// req = request coming from browser/client
// res = response sent back to browser
http.createServer((req,resp)=>{
    resp.write("<h1>this my first server</h1>");
resp.end("The end");
}).listen(4800);

http.createServer((req,resp)=>{
    resp.write("<h1>this my second server running on port 4100 </h1>");
resp.end("The end");
}).listen(4100);