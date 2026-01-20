let http=require('http');
let server=http.createServer((req,res)=>{
    let secret="thisisasecret";
    let header=req.headers.Authorization;
    if(!header)
    {
        res.statusCode=401;
        res.write("unAuthorizated user");
        res.end();
        return ;
    }

    if(header==secret)
    {
        res.statusCode=200;
        res.write("WELCOME user");
        res.end();
        return;
    }
    else{
        res.statusCode=403;
        res.write("inValid user !! ");
        res.end();
        return;
    }
});

server.listen(3001,()=>{
    console.log("app is running at port 3001");
})