let express=require('express');
let bodyparser=require('body-parser');
let app=express();
let path=require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(bodyparser.urlencoded({extended:true}));

let Products=["Phone","earbud","smartwatch"];

app.get("/product",(req,res)=>{
    res.render("show",{Products});
});


app.get('/add',(req,res)=>{
    res.render("addProduct");
})
app.get('/submit',(req,res)=>{
    console.log(req.query);
    Products.push(req.query.p_name);
    res.redirect('/product');
})

 
 
//params
app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.listen(4000,()=>{
    console.log("app is running at port 4000");
})