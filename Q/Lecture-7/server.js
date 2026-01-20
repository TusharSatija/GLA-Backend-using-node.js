let http= require('http');
let server=http.createServer((req,res)=>{
    res.statusCode=201;
    res.write('server created successfully...');
    res.end();
})
server.listen(3000,()=>{
    console.log("app is running at port 3000");
})