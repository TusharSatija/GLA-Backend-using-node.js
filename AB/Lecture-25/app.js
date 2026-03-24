let express=require('express');
let mongoose=require("mongoose");
let app=express();

async function connectDB()
{
   await mongoose.connect("mongodb://127.0.0.1:27017/AB");
   console.log("connected to db");
}
connectDB();

app.listen(3000,()=>{
    console.log("app is runing at port 3000")
})