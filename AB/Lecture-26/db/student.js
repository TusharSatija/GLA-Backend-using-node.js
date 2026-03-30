let mongoose=require("mongoose");
let student=mongoose.Schema({
    Sname:Number,
    Roll_no:BigInt,
    year:String,
    section:String,
    Contact:BigInt,
    subject:Array,
    Email:String
});

let Student=mongoose.model('Student',student);
module.exports=Student;