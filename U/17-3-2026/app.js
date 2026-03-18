let express=require('express');
let app=express();
let bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
let path=require('path')
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));

app.get("/login",(req,res)=>{
    res.render('login');
})

app.post("/sub",(req,res)=>{
    console.log(req.body);
    res.send("data revieve successfully");
})

app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send(req.query);  
})

app.listen(4000,()=>{
    console.log("app is running at port 4000");
});