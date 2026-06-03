const http = require('http');
const userdata = [
    {
        'name' : 'Prakash',
        'age' : 20 , 
        'email' : 'prakash@gmail.com'
    },
    {
        'name' : 'Chirag',
        'age' : 21, 
        'email' : 'chirag@gmail.com'
    },
    {
        'name' : 'Dixit',
        'age' : 20, 
        'email' : 'dixit@gmail.com'
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json')
    resp.write(JSON.stringify(userdata));
    resp.end();
}).listen(6100); 