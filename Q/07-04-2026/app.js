let express=require('express');
let app=express();
let router=express.Router();


router.use((req,res,next)=>{
    console.log("date ", Date.now());
    next();
});

router.use('/user/:id',(req,res,next)=>{
    console.log("route",req.url);
    next();
},(req,res,next)=>{
    console.log("method",req.method);
    next();
})
//http://localhost:3000/test  method -> post
//http://localhost:3000/user/1212 method ->patch
//http://localhost:3000/user/111/id method ->put
app.listen(3000,()=>{
    console.log("app is running at port 3000");
})