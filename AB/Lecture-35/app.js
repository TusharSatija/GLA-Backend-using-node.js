let express=require('express');
let app=express();
require('dotenv').config();
let {v4:uuid}=require('uuid');
let jwt=require('jsonwebtoken');

let user=[
    {
        name:"rahul",
        id:v4
    }
]
app.post('/login',(req,res)=>{
    let {name}=req.body;
    jwt.sign({username:name},process.env.config);

})


app.listen(3000,()=>{
    console.log("server is running at port 3000");
})