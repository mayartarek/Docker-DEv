const express=require('express');
const app=express();
const port=4000;
app.get('/',(req,res)=>{res.send('<h1>HELLO WORLD</h1> <p>Hello from Express</p>')});  
app.listen(port,()=>{console.log(`SERVER IS RUNNING ON PORT ${port}`)});    
