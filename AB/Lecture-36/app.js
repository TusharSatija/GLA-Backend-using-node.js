let express=require('express');
let app=express();
require('dotenv').config();
let {v4:uuid}=require('uuid');
let jwt=require('jsonwebtoken');
app.use(express.json());

let user=[
    {
        name:"rahul",
        id:uuid()
    }
];
let token="";

app.get('/register',(req,res)=>{
    let {name}=req.query;
    let token=jwt.sign({username:name},process.env.secret);
    let paylod=token.split('.')[1];
    console.log(paylod);
    res.send(token);
})

let authenticate=((req,res,next)=>{
    jwt.verify(token,process.env.secret,(err,user)=>{
        if(err)
            console.log(err);
        req.body=user;
    })
    next();
});

app.get('/order',authenticate,(req,res)=>{
    res.json({
        "message ":" valid user",
        "user":req.body
    })
})


// http://localhost:3000/register?name="abc"

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})