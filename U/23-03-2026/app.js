let express=require('express');
let app=express();
let bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
let path=require('path');                 
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));


let Products=[
    {
        Pname : "Phone", Pid: 112, Pprice:30000,
        url:"https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        Pname : "smartwatch", Pid: 111, Pprice:1000,
        url:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        Pname : "Earbuds", Pid: 114, Pprice:2000,
        url:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

app.get('/products',(req,res)=>{
    res.render("index",{Products});
});

app.get("/products/new",(req,res)=>{
    res.render("new");
});


app.post('/products',(req,res)=>{
    let {a_name,a_price,a_url}=req.body;
    let p={
        Pname:a_name,Pprice:a_price,url:a_url,
        Pid:Math.floor(Math.random()*1000)
    };
    console.log(p);
    Products.push(p);
    res.redirect('/products');
})


 
app.listen(4000,()=>{
    console.log("app is running at port 4000");
});