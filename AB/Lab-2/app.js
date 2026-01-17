let http=require('http');

let server=http.createServer((req,res)=>{
    res.write("learning http module")
})

server.listen(3000,()=>{
    console.log("server is running at port 3000");
})

// http://localhost:3000/
