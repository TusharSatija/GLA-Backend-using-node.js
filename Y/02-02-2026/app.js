let express=require('express');
let app=express();
let path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

let todo=[
    "reading books",
    "Go to market",
    "coding"
];

app.get('/todos',(req,res)=>{
    res.render('index',{todo});
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})