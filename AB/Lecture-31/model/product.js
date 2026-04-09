let mongoose=require('mongoose');

let productschema=new mongoose.Schema({
    name:String,
    Price:{
        type:Number,
        min:0,
        max:1000000
    },
    img:String,
    rating:{
        type:Number,
        default:1
    }
});

let product= mongoose.model('product',productschema);
module.exports=product;