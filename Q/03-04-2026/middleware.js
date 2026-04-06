let express=require('express');
let app=express();
let mongoose=

app.use((req,res,next)=>{
    console.log("first middleware");
    // next();
});


app.get('/',(req,res,next)=>{
    res.send("this is a / route");
    console.log("first middleware");
    next();
});







app.listen(3000,()=>{
    console.log("app is running at port 3000");
})