let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

let obj={
    id:1222
}


let todo=[
    "coding",
    "go to market",
    "reading book",
    "go to gym"
]

app.get('/todos',(req,res)=>{
    res.render('index1',{todo});
})

app.get('/product/:categ',(req,res)=>{
    console.log(req.params);
    res.send("this is a / product/categ route");
})


let t1={
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

app.get('/',(req,res)=>{
    res.render("index",{obj});
})


app.listen(3000,()=>{
    console.log('app is running at port 3000')
})


//     http://localhost:4000/product/categ/
//     http://localhost:4000/product/mobile/
//     http://localhost:4000/product/mobile

// query params