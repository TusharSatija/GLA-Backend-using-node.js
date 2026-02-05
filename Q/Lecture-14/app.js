let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/register',(req,res)=>{
    res.render('index');
})
//  http://localhost:3000/submit?uname=""&uid=""
app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send('user data revieved successfully ...');
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})