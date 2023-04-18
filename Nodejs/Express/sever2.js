const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("data send by Browser",req.query.name)
    res.send(" Welcome " + req.query.name);
});
app.get('/help',(req,res)=>{
    res.send("This is Help Page")
})

app.listen(3400);