let express=require('express');
let mongoose=require("mongoose");
let app=express();
let todo=require('./model/todo');
let t=require('./seed');

mongoose.connect("mongodb://127.0.0.1:27017/3Y")
.then(()=>{
    console.log("connected to db");
})  
.catch((err)=>{
    console.log(err);
});

app.get('/todos',(req,res)=>{
    res.render('index',{todo});
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