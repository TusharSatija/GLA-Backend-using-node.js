let server=require('http');
let server=http.createServer((req,res)=>{

    console.log(req.headers);
    console.log(res.headers);
    
res.statusCode=201;
res.write("learning https server");

})

server.listen(4000,()=>{
    console.log("server is running on port 4000");

})