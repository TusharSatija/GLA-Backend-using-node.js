let express=require('express');
let app=express();
let jwt=require('jsonwebtoken');
require("dotenv").config()


app.get('/register',(req,res)=>{
    let {name,pass}=req.query;
    jwt.sign({"username":name,"password":pass},process.env.secret);
})

app.listen(process.env.port,()=>{
    console.log("app is running at port 3000");
})