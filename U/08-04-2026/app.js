let express=require('express');
let app=express();
let bodyparser=require('body-parser');
let mongoose=require("mongoose");
let todo=require('./model/todo');
let t=require('./seed');
mongoose.connect("mongodb://127.0.0.1:27017/3U")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function seeddb()
{
    await todo.insertMany(t);
    console.log("inserted into db");
}
seeddb();


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})