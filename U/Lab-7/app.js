let express=require('express');
let app=express();
let bodyparser=require('body-parser');;
app.use(bodyparser.urlencoded({extended:true}));
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
});

app.post('/todo/new',async (req,res)=>{
    let { Tstaus,Ttask ,Tpriorty }=req.body;
    let t= new todo({
        status:Tstaus,
        task:Ttask,
        priorty:Tpriorty
    });
    await t.save();
    console.log("added successfully !!");
    res.redirect('/todos');
});

app.get('/todo/:id',(req,res)=>{
    res.render('show');
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