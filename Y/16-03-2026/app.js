let express=require('express');
let app=express();
let path=require("path");
app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"views"));

let Todos=["Go to market","reading books","coding" ,"Go to gym"];

app.get('/todos',(req,res)=>{
    res.render("index",{Todos});
})

app.listen(4000,()=>{
    console.log("app is running at port 4000")
})