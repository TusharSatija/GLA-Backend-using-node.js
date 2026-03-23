//Practical
let http=require("http");
let server=http.createServer((req,res)=>{
    res.write("learning http server");
    res.end();
})
server.listen(8080,()=>{
    console.log("server is running at Port 8080");
})

// http://localhost:8080