let mongoose=require('mongoose');

let productschema= new mongoose.Schema({
    name:String,
    price:Number,
    rating:{
        type:Number,
        default:1,
        min:1,max:5
    },
    img:String,
    description:String
});

let product=mongoose.model("product",productschema);
module.exports=product;