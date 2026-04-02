let mongoose=require('mongoose');

let empSchema= mongoose.Schema({
    empName:String,
    empPass:String
}); 

let employe=mongoose.model('employe',empSchema);
module.exports=employe;
