let express=require('express');
let app=express();
let mongoose=require('mongoose');
let path=require('path');
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"views"));
 
mongoose.connect('mongodb://127.0.0.1:27017/3U')
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});





app.listen(3000,()=>{
    console.log("app is running at port 3000");
})