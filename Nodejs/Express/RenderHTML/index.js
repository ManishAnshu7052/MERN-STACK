const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    //HTML 
    res.send(`
    <h2>Go To Pages</h2>
    <a href="/about">Go to about page</a>
    `)
});
app.get('/about',(req,res)=>{
   res.send(`
   <input type="text" placeholder="user name" />
   <button>Click Me</button>
   <a href="/json">Go to  JSON page</a>
   `)
})
app.get('/json',(req,res)=>{
    res.send(`[
        {
            name:"Manish Kumar",
            email:"patelmanish@gmail.com"
        },
        {
            name:"Avanish Kumar Patel",
            email:"avanishKumar@123.com"
        }
        <a href="/">Go to home Page</a>
    ]`)
})
app.listen(2000);