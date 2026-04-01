let express=require('express');
let mongoose=require('mongoose');
let app=express();
let {s}=require('./seed');
let P1=require('./db/product');
async function connectdb()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/3Y");
    console.log("connected to db");
}
connectdb();

async function insert_to_db()
{
    let product=new P1({
        Name:"Phone",
        price:30000,
        rating:4,
        url:"https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    });
    await product.save();
    console.log("inserted to db");
}
insert_to_db();

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})