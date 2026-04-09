let express=require('express');
let app=express();
let bodyparser=require('body-parser');
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

async function seeddb()
{
     await product.insertM any(p);
     console.log("inserted to db");
}
// seeddb();


app.listen(3000,()=>{
    console.log("app is running at port 3000")
})