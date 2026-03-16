let express=require('express');
let app=express();

app.get('/product/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(req.params);
})  

app.get("/product/:abc",(req,res)=>{
    console.log(req.params.abc);
    res.send(req.params);
})


app.listen(4000,()=>{
    console.log("app is running at port 4000")
})