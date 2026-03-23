// /todos list to perform CRUd Operation
let express=require("express"); 
const path = require("path");
let app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

let Todos=[
    {
        task:"Go to market", todo_id:1111 ,todo_status:"done"
    },
    {
        task:"coding", todo_id:1221 ,todo_status:"done"
    }
];

app.get('/todos',(req,res)=>{
    res.render("index",{Todos})
})


app.listen(4000,()=>{
    console.log("app is running at port 4000");
});