let express=require('express');
let app=express();
let jwt=require('jsonwebtoken');
require('dotenv').config();

app.get('/register',(req,res)=>{
    let {username,password}=req.query;
    jwt.sign({"name":username,"Pass":password},process.env.SECRET);
})

app.listen(process.env.port,()=>{
    console.log('app is running at port 3000');
})