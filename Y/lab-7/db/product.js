let mongoose=require('mongoose');

let p=mongoose.Schema({
    Price:{
     type: Number,
     required:true
    },
    Name:{
        type:String,
        required:true,
        trim:true
    },
    url:{
        type:String,
        required:true
    },
    rating:Number
});

let P1=mongoose.model('P1',p);
module.exports=P1;