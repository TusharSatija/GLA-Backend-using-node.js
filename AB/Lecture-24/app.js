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
{   "p_name":"Phone","p_id":111,url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"},
{   "p_name":"earbuds", "p_id":113,url:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D"},
{   "p_name":"Smartwatch","p_id":115,url:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"}
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

app.get('/product/:id',(req,res)=>{
    let s=Products.filter((data)=>{
        return data.p_id==req.params.id;
    });
    console.log(s);
    res.render("show",{s})
})


app.get('/product/:id/edit',(req,res)=>{
    let p=Products.find((i)=>{
        console.log(req.params.id);
        return i==req.params.id;
    });
    console.log(p);
    res.render('edit',{p});
})


app.delete('/product/:id',(req,res)=>{
    let d=Products.filter((data)=>{
        return data.p_id!=req.params.id;
    })
    console.log(d);
    Products=d;
    res.redirect('/product');
})

app.listen(4000,()=>{
    console.log("app is running at port 4000");
})