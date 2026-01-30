let express= require('express');
let bodyparser=require('body-parser');
let app=express();
let path=require('path');
app.set('view engine',"ejs");
app.set("views",path.join(__dirname,'views'));

app.use(bodyparser.urlencoded({extended:true}));
let obj={
    id:1212
}

let todo=[
    "coding",
    "reading books",
    "go to market"
]

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user registered successfully ....");
})


app.get('/todos',(req,res)=>{
    res.render('index1',{todo});
})


app.get('/',(req,res)=>{
    res.render('index',{obj});
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})