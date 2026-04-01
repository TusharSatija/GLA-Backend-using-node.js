let mongoose=require('mongoose');

let p=mongoose.Schema({
    Price:{
     type: Number
    },
    Name:{
        type:String,
    },
    url:{
        type:String
    },
    rating:Number
});

let P1=mongoose.model('P1',p);
module.exports=P1;