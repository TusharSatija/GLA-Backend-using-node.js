let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send("this is a / route");
})

app.get('/login',(req,res)=>{
    res.send("this is a /login route");
})

app.get('/register',(req,res)=>{
    res.send("this is a / register route");
})

app.listen(3001,()=>{
    console.log("app is running at port 3001");
})