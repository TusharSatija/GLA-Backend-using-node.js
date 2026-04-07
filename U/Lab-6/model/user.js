let mongoose=require('mongoose');

let userschema= new mongoose.Schema({
    username:String,
    password:String
});
let user=mongoose.model('user',userschema);
module.exports=user;