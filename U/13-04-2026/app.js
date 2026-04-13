let express=require('express');
let app=express();
let bodyparser=require('body-parser');
let mongoose=require("mongoose");
let todo=require('./model/todo');
let t=require('./seed');
let path=require('path');
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,"views"));
mongoose.connect("mongodb://127.0.0.1:27017/3U")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


app.get('/todos',async (req,res)=>{
    let t=await todo.find();
    console.log(t);
    res.render('index',{t});
});

app.get('/todo/new',(req,res)=>{
    res.render('new');
})

async function seeddb()
{
    await todo.insertMany(t);
    console.log("inserted into db");
}
// seeddb();


app.listen(3001,()=>{
    console.log("app is running at port 3001");
})