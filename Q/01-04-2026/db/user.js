let mongoose=require('mongoose');

let userschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

let User= mongoose.model('User',userschema);
module.exports=User;