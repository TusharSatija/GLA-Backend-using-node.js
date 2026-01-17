let http=require('http');

let server=http.createServer((req,res)=>{
    res.write("learning http module");
    res.end()
})

server.listen(3000,()=>{
    console.log("server is runnning at port 3000")
})