const http = require('http');
http.createServer((req,res)=>{
    // res.write("Hello Manish Kumar Patel");
    res.write("<h1>Hello, Manish</h1>")//html
    res.end();
}).listen(4500);