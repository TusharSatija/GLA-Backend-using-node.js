let http=require('http');
let server=http.createServer((req , res)=>{
res.write("learning http server");
res.statusCode=200;
res.end();
});

server.listen(4000 ,()=>{
console.log("server is running at port 4000");
})