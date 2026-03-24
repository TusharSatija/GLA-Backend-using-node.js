const  mongoose = require("mongoose");
let {Schema}=mongoose;

let student=new Schema({
    name:String,
    age:Number,
    Marks:Number,
    Grade:String,
    Mobile:BigInt,
    Address:String,
    aadhar:BigInt
});

let Student= mongoose.model('Student',student);
module.exports=Student;