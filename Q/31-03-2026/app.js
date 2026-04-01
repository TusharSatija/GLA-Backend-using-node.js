let express=require('express');
let mongoose=require('mongoose');
let User=require('./db/user');
let app=express();

mongoose.connect("mongodb://127.0.0.1:27017/3Q")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


async function insert(data)
{
    let u1= new User(data);
     await u1.save(); 
     console.log("inserted !!");  
}
insert({username:"rohan",password:"secret"});



app.listen(3000,()=>{
    console.log("app is running at port 3000")
})