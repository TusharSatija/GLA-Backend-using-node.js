let express=require('express');
let mongoose=require("mongoose");
let Student=require('./db/student');
let data=require('./seed');
const student = require('./db/student');
console.log(data);
let app=express();

// async function connectDb()
// {
//     await  mongoose.connect("mongodb://127.0.0.1:27017/3AB")
// }
// connectDb();

mongoose.connect("mongodb://127.0.0.1:27017/3AB")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

console.log(Student);

async function insertdb(data)
{
    // let s1=new Student(data);
    // await s1.save();
    await Student.insertMany(data);
}

// insertdb(data);
// insertdb({
//     Sname:"ram",
//     Roll_no:1212,
//     year:"3rd",
//     section:'B',
//     Contact:938473838,
//     Email:"ram@gmail.com"
// }); 


async function updatedb()
{   
    await student.updateMany({},{$set:{section:'A'}});
    console.log("updated !!")
}
updatedb();

app.listen(3000,()=>{ 
    console.log("app is running at port 3000")
})