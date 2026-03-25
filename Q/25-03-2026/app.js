let express=require('express');
let app=express(); 
let bodyParser=require('body-parser');
let methodoverride=require("method-override");
let path=require('path');
const { url } = require('inspector');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodoverride('_method'));
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
});

app.get('/product/:id',(req,res)=>{
    let p=Products.filter((data)=>{
        return data.P_id==req.params.id;
    })
    console.log(p);
    res.render("show",{p}); 
})

app.get('/product/:id/edit',(req,res)=>{
     let e=Products.filter((data)=>{
        return data.P_id==req.params.id;
    })
    console.log(e);
    res.render("edit",{e});
});


app.put('/product/:id',(req,res)=>{
    let {e_name,e_price,e_url}=req.body;
    let updatedProduct=Products.filter((data)=>{
        return data.P_id!=req.params.id
    });
    let p2={
        Pname:e_name,P_id:Math.floor(Math.random()*100),
        P_price:e_price,url:e_url
    }
    updatedProduct.push(p2);
    Products=updatedProduct;
    res.redirect('/products');
})

app.listen(4001,()=>{
    console.log("app is running at  port 4001");
})