const http = require('http');
const age = 20;
http.createServer((req,resp)=>{
    resp.write(`
        <html>
            <head>
                <title>my first server</title>
                <body>
                    <h1>Hey , My name is Prakash . My age is `+age+` </h1>
                </body>
            </head>
        </html>
    `)
    resp.end();
}).listen(4800)