let express=require('express');
let app=express();
let mongoose=require('mongoose');
let bcrypt=require('bcrypt');
let bodyparser=require("body-parser");
let path=require('path');
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"views"));
let user=require("./model/user");
app.use(bodyparser.urlencoded({extended:true}));



mongoose.connect("mongodb://127.0.0.1:27017/3U")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

app.get('/register',(req,res)=>{
    res.render('register'); 
});

app.post('/register',(req,res)=>{
    let {Uname,Upass}=req.body;
    bcrypt.hash(Upass,10,async (err,hash)=>{
        let u= new user({
            username:Uname,password:hash
        });
        await u.save();
        console.log("user registered successfully");
    })
    res.send("registed successfully ...");
})

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})