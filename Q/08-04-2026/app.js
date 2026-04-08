let express=require('express');
let mongoose=require("mongoose");
let path=require("path")
let app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
let p=require('./seed');
let product=require('./model/product');
mongoose.connect("mongodb://127.0.0.1:27017/3Q")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function seeddb()
{
   await  product.insertMany(p);
   console.log("inserted into db");
}
// seeddb()

app.listen(3000,()=>{
    console.log("app is running at port 3000")
})