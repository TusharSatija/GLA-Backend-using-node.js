let express=require('express');
let app=express();
let bcrypt=require('bcrypt');
let path=require('path');
let employe=require('./model/employe');
const { default: mongoose } = require('mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post("/register",(req,res)=>{
    let {Uname,Upass}=req.body;
    bcrypt.hash(Upass,10,async (err,hash)=>{
        let e=new employe({
            empName:Uname,
            empPass:hash
        });
        await e.save();
        console.log("employee register successfully !!");
    });
    res.send("registered succesfully ");
});


mongoose.connect("mongodb://127.0.0.1:27017/3Q")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function update()
{
    await employe.updateMany({empName:"Tushar1"},{ $set: {empName:"Rahul"}});    
}
update();


app.listen(4000,()=>{
    console.log("app is running at port 4000")
})