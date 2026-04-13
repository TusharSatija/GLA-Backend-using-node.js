let express=require('express');
let mongoose=require("mongoose");
let path=require("path")
let app=express(); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
let p=require('./seed');
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
let product=require('./model/product');
mongoose.connect("mongodb://127.0.0.1:27017/3Q")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

app.get('/products',async (req,res)=>{
    let p=await product.find();
    console.log(p);
    res.render('index',{p});
});

app.get('/product/new',(req,res)=>{
    res.render('new');
});

app.post('/product/new',async(req,res)=>{
    console.log(req.body);
    let {Pname,Pimg,Pprice,Pdesc}=req.body;
    let p1= new product({
        name:Pname,
        img:Pimg,
        price:Pprice, 
        description:Pdesc
    });
    await p1.save();;
    console.log("add successfully !!")
    res.redirect('/products');
});


app.get('/product/:id',async (req,res)=>{
    let id=req.parmas.id;
    let res=await  product.findById({_id :id});
    console.log(res);
    res.render("show",{res});
})

async function seeddb()  
{
   await  product.insertMany(p);
   console.log("inserted into db");
}
// seeddb()

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})