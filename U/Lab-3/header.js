let http= require('http');
let server=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(res.headers);
    res.statusCode=204;
    res.write("learning http module");
    res.end();
})
server.listen(3000,()=>{
    console.log('server is running at port 3000');  
})