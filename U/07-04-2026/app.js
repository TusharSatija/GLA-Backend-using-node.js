let express=require('express');
let app=express();
let router=express.Router();

router.use((req,res,next)=>{
    console.log("date ", Date.now());
    next();
});

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
app.listen(3000,()=>{
    console.log("app is running at port 3000");
})