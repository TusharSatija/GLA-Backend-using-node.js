let express=require('express');
let app=express();
const path=require('path');
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.get('/register',(req,res)=>{
    res.render('register');
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user register successfully");
})
app.listen(4000,()=>{
    console.log("app is running at port 4000");
})