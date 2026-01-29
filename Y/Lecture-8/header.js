let http=require('http');
let server=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(res.headers);
    res.statusCode=204;
    res.write("http server");
    res.end();
})

server.listen(3000,()=>{
    console.log("app is running at port 3000");
})


//               http://localhost:3000 