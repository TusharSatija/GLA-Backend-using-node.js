let express=require('express');
let mongoose=require("mongoose");
let path=require("path")
let app=express(); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
let p=require('./seed');
let methodoverride=require('method-override');
app.use(methodoverride("_method"));
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
    console.log(id);
    let res1=await  product.find({_id :id});
    res.render("show",{res1});
});


app.get('/product/:id/edit',async (req,res)=>{
    let id=req.params.id;
    let e=await product.find({_id :id});
    console.log(e);
    res.render('edit',{e});
});

app.put('/product/:id/edit',async (req,res)=>{
    let { Ename, Eprice, Eimg, Erating }= req.body;
    await product.findOneAndUpdate({_id:req.parmas.id},{
        name:Ename,
        price:Eprice,
        rating:Erating,
        img:Eimg
    });
    console.log("updated !!");
    res.redirect('/products');
});

app.delete('/product/:id',async (req,res)=>{
    let id = req.params.id;
    let d= await product.deleteOne({_id:id});
    console.log(d);
    res.send("this is a delete method route",id);
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