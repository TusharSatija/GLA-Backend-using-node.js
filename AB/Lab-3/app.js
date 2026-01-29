let http= require('http');

let server=http.createServer((req,res)=>{
    let header=req.headers.Authorization;
    let secret="Thisisasecret";

    if(!header)
    {
        res.statusCode=401;
        res.write("enter header auth first");
        res.end();
        return;
    }
    if(header==secret)
    {
        res.statusCode=201;
        res.write("welcome user");
        res.end();
        return;
    }
    else{
        res.statusCode=403;
        res.write("Invalid user");
        res.end();
        return;
    } 
});

server.listen(3000,()=>{
    console.log("server is running at port 3000");
})