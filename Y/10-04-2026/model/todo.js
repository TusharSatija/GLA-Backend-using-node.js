let mongoose=require('mongoose');

let todoschema=new mongoose.Schema({
    task:String,
    status:Boolean,
    priority:{
        type:String,
        default:"low"
    }
});

let todo= mongoose.model('todo',todoschema);
module.exports=todo;