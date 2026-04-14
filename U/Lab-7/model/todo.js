let mongoose=require('mongoose');
let todoschema= new mongoose.Schema({
    task:String,
    status:Boolean,
    priorty:{
        type:String,
        default:"medium"
    }
});
let todo=mongoose.model('todo',todoschema);
module.exports=todo;