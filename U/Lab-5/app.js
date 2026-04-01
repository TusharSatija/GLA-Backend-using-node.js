let express=require('express');
let mongoose=require('mongoose');
let User=require('./model/user');
let app=express();

mongoose.connect("mongodb://127.0.0.1:27017/3U")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


async function insertdb()
{
    // let u1= new User({username:"ram",password:"secret"});
    // await u1.save();
    await User.create({useranme:"Tushar",password:"msdh"});
    console.log("inserted !!"); 
    
}
insertdb();


app.listen(3000,()=>{
    console.log("app is running at port 3000")
})