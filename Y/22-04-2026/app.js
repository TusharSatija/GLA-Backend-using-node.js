let express=require('express');
let app=express();
let jwt=require("jsonwebtoken");
require("dotenv").config();

app.get('/register',(req,res)=>{
    let {name,pass}=req.query;
    let token=jwt.sign({"Username":name,"password":pass},process.env.SECRET);
    console.log(token);
    let payload=token.split('.')[1];
    console.log(payload);
    res.send(token);
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})


// http://localhost:3000/register?name="abc"&pass="22123"