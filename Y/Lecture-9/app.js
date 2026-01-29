let http=require('http');

let server=http.createServer((req,res)=>{
    let secret="thisisasecret";
    let header=req.headers.Authorization;

    if(!header)
    {
        res.statusCode=401;
        res.write("kindly enter header value first");
        res.end();
        return;
    }
    if(header==secret)
    {
        res.statusCode=200;
        res.write("welcome user");
        res.end();
        return;
    }
    else
    {
        res.statusCode=403;
        res.write("Invalid user");
        res.end();
        return;
    }
});

server.listen(3000,()=>{
    console.log("app is running at port 3000");
})