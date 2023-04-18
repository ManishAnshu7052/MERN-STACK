const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>This is Home Page</h1>");
});

app.get('/about',(req,res)=>{
    res.send("Hello This is about Page");
})

app.listen(4500);