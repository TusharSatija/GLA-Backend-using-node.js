let express=require('express');
let app=express();
let bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))
let mongoose=require('mongoose');  
let path=require('path');
let product=require('./model/product');
let p=require('./seed');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

mongoose.connect("mongodb://127.0.0.1:27017/3AB")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});


app.get('/products',async (req,res)=>{
    let p=await product.find({});
    console.log(p);
    res.render('index',{p});
});


app.get('/product/new',(req,res)=>{
    res.render('new');
})

app.post('/product/new',async (req,res)=>{
    let { Pname,Pprice,Pimg,Prating }=req.body;
    let p1= new product({
        name:Pname,
        price:Pprice,
        rating:Prating,
        img:Pimg
    });
    await p1.save();
    console.log("added !!");
    res.redirect('/products');
})

async function seeddb()
{
     await product.insertMany(p);
     console.log("inserted to db");
}
// seeddb();


app.listen(3000,()=>{
    console.log("app is running at port 3000")
})