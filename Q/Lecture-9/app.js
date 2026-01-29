let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send("this is /")
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})