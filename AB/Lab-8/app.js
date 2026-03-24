let express=require("express");
let mongoose=require("mongoose");
let app=express();
let {Student}=require('./model/student');
async function connectdb()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/Y");
    console.log("connected to db");
}
connectdb();

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})