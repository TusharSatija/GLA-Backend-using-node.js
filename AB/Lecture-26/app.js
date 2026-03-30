let express=require('express');
let mongoose=require("mongoose");
let app=express();

async function connectDb()
{
    await  mongoose.connect("mongodb://127.0.0.1:27017/3AB")
}
connectDb();

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})