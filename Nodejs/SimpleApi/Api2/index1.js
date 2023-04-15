const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'application\json'});
    resp.write(JSON.stringify({
        name: 'Avanish Kumar Patel',
        age: 20,
        email: 'patelmanish5272@gamil.com',
        address: 'Allahabad'
    }))
    resp.end();
}).listen(4500);