let express=require('express');
let mongoose=require('mongoose');
let student=require('./model/student');
let app=express();

mongoose.connect("mongodb://127.0.0.1:27017/3Y")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})