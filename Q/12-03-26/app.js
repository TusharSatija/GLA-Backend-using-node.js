let express=require('express');
let bodyparser=require("body-parser");
let path=require('path');
let app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyparser.urlencoded({extended:true}));

//post

app.get("/addProduct",(req,res)=>{
    res.render('addProduct');
})

app.post('/submit',(req,res)=>{
    console.log(req.body);
    Products.push(req.body.P_name);
    res.redirect('/product');
})


//get method
app.get('/add',(req,res)=>{
    res.render("add");
})

app.get('/submit',(req,res)=>{
    console.log(req.query);
    Products.push(req.query.p_name);
    res.redirect('/product');
})

let Products=[ "phone" , "watch" ,"earbuds"];

app.get('/product',(req,res)=>{
    res.render("show",{Products});
})







app.listen(4000,()=>{
    console.log("server is running at port 4000");
})