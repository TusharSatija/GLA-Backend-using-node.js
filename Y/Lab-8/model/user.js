let mongoose=require('mongoose');

let userSchema= new mongoose.Schema({
    username:String,
    password:String
});
let user=mongoose.model('user',userSchema);
module.exports=user;