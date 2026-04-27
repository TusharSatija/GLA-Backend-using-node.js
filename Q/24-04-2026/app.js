let express=require('express');
const mongoose = require('mongoose');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
let short=require('./model/short');

mongoose.connect("mongodb://127.0.0.1:27017/3Q")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

app.get('/shortid',async (req,res)=>{
    let s=await short.find({});
    app.render('index',{s});
});

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})