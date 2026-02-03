let express=require('express');
let app=express();
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/register',(req,res)=>{
    res.render('index1');
})

app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send("user register sucessfully using get method")
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user register successfully...");
})




app.listen(3000,()=>{
    console.log("app is running at port 3000");
})