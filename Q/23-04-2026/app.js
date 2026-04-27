let express=require('express');
let app=express();
let jwt=require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
let path=require('path');
app.use(express.static(path.join(__dirname,"static")));

let token="";             

app.get('/register',(req,res)=>{
    let {username,password}=req.query;
     token=jwt.sign({"name":username,"Pass":password},process.env.SECRET);
     let payload=token.split('.')[1];
     console.log(payload);
    console.log(token);
    res.send(token);
});


let authenticate=((req,res,next)=>{
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err)
            console.log(err);
        req.body=user;
    });
    next();
});

app.get('/order',authenticate,(req,res)=>{
    res.json({
        "message":"valid user"
    })
})

http://localhost:3000/register?username="abc"&password="222"
 
app.listen(3001,()=>{
    console.log('app is running at port 3001');
})