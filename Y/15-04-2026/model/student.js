let mongoose=require('mongoose');
let studentschema= new mongoose.Schema({
    age:Number
});
let student= mongoose.model("student",studentschema);
module.exports=student;