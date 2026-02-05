let express=require('express');
let app=express();
let bodyparser=require('body-parser');
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('index1');
})

app.post("/register",(req,res)=>{
    console.log(req.body);
    let {upass,cpass}=req.body;
    if(upass!==cpass)
        res.send("kindly enter same password");
    else
        res.send("user register succesfully");
})

app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send("user register successfully...");
})


app.listen(3000,()=>{
    console.log("app is running at port 3000");
})