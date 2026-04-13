let express=require('express');
let mongoose=require("mongoose");
let app=express(); 
let t=require('./seed');
let path=require('path');
const todo = require('./model/todo');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));

mongoose.connect("mongodb://127.0.0.1:27017/3Y")
.then(()=>{
    console.log("connected to db");
})  
.catch((err)=>{
    console.log(err);
});

app.get('/todos',async (req,res)=>{
    let todo1= await todo.find({});
    res.render('index',{todo1});
});

app.get('/product/new',(req,res)=>{
    res.render('new');
})

async function seeddb()
{
  await todo.insertMany(t);
  console.log("inserted to db")
}
// seeddb();



app.listen(4000,()=>{
    console.log("app is running at port 4000")
})