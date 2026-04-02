let mongoose=require("mongoose");
let student=mongoose.Schema({
    Sname:{
       type:String,
       required:true,
    },
    Roll_no:{
        type:BigInt,
        required:true,
        min:1,
        max:10000
    },
    year:String,
    section:String,
    Contact:BigInt,
    Email:String
});

module.exports=mongoose.model('Student',student);
