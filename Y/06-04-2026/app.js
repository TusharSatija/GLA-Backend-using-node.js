let express=require('express');
let app=express();
let mongoose=require('mongoose');
let bcrypt=require('bcrypt');
let bodyparser=require('body-parser');
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));


app.get('/register',(req,res)=>{
    res.render('register');
});


app.post('/register',(req,res)=>{
    let {Uname,Upass}=req.body;
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})