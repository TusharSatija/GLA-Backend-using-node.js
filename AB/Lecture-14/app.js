let express=require('express');
let app=express();
let path=require('path');
let bodyparser=require('body-parser');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));
app.get('/register',(req,res)=>{
    res.render('index1');
})



app.get('/submit',(req,res)=>{
    console.log(req.query);
    if(req.body.upassword===req.body.uconfirmpass)
        res.send("user data recieved successfully");
    else
        res.send("kindly enter same password in both field")
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user register successfully...");
})



app.listen(3000,()=>{
    console.log("app is running at port 3000");
})