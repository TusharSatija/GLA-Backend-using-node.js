let express=require('express');
let app=express();
let bodyparser=require('body-parser');
let methodoveride=require('method-override');
let path=require('path');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodoveride("_method"));
let Products=[
{   "p_name":"Phone","p_id":111},
{   "p_name":"earbuds", "p_id":113},
{   "p_name":"Smartwatch","p_id":115}
];

app.get("/product",(req,res)=>{
    res.render("index",{Products});
});


app.get('/add',(req,res)=>{
    res.render("new");
})
app.get('/submit',(req,res)=>{
    console.log(req.query);
    Products.push(req.query.p_name);
    res.redirect('/product');
})

//post method

app.get('/form',(req,res)=>{
    res.render("new");
})

app.post("/sub",(req,res)=>{
    console.log(req.body);
    Products.push(req.body.P_name);
    res.redirect('/product');
});


app.get('/product/:id/edit',(req,res)=>{
    let p=Products.filter((i==req.params.id)=>{
        return i;
    });
    res.render('edit',{p});
})

app.listen(4000,()=>{
    console.log("app is running at port 4000");
})