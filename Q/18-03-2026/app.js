let express=require('express');
let app=express(); 
let bodyParser=require('body-parser');
let path=require('path');
const { url } = require('inspector');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.urlencoded({extended:true}));
let Products=[
    {
        Pname:"Phone",P_id:111,P_price:100000,
        url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
    },
    {
        Pname:"watch",P_id:112,P_price:9999,
        url:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        Pname:"earbuds",P_id:114,P_price:8990,
        url:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"
    }
]

app.get("/products",(req,res)=>{
    res.render("index1",{Products});
})

app.get('/product/new',(req,res)=>{
    res.render("new");
})


app.post("/products",(req,res)=>{
    let p={
        P_id:Math.random()*1000,
        P_price:req.body.a_price,
        url:req.body.a_url,
        Pname:req.body.a_name
    }
    Products.push(p);
    res.redirect('/products');
})

app.listen(4001,()=>{
    console.log("app is running at  port 4001");
})