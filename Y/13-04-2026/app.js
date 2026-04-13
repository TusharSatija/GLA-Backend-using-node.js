let express=require('express');
let mongoose=require("mongoose");
let app=express(); 
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
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

app.get('/todo/new',(req,res)=>{
    res.render('new');
});

app.post('/todo/new',async (req,res)=>{
    console.log(req.body);
    let { Ttask,Tpriority,Tstatus }=req.body;
   let t= new todo({
        task:Ttask,
        priority:Tpriority,
        status:Tstatus
    });
    await t.save();
    console.log("product added");
    res.redirect('/todos');
});

app.delete('/todo/:id',async (req,res)=>{
    let id=req.params.id;
    await todo.findOneAndDelete({_id:id});
    res.send("product deleted")
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