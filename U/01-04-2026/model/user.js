let mongoose=require('mongoose');
let userschema= mongoose.Schema({
    username:String,
    password:String
});

let User=mongoose.model("User",userschema);
module.exports=User;