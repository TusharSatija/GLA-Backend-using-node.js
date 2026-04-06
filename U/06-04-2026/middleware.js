let express=require('express');
let app=express();

app.use((req,res,next)=>{
    console.log("first middleware");
    // next();
    console.log("first middleware after next"); 
});

app.use((req,res,next)=>{
    console.log("second middleware");
    next();   
    console.log("second middleware after next");
})

app.get('/',(req,res,next)=>{
    res.send("this is a / route");
    next();
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})