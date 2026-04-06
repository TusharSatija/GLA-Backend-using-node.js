let express=require('express');
let bcrypt=require('bcrypt');
let mongoose=require('mongoose');
let bodyparser=require('body-parser');
let user=require('./model/user');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('register');
});
mongoose.connect("mongodb://127.0.0.1:27017/3AB")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

app.post('/register',(req,res)=>{
    let {Uname,Upass}=req.body;
    bcrypt.hash(Upass,10,async (err,hash)=>{  
        let u=new user({username:Uname,passwords:hash});
        await u.save();
        console.log("user registered successfully !!");
    });
    res.send("user regsitered !!");
})


app.listen(3000,()=>{
    console.log("app is runnig at port 3000");
})