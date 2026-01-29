let http=require('http');

let server=http.createServer((req,res)=>{
  let header=req.headers.authorization;
  let secret="thisisasecret";

    if(!header)
    {
        res.statusCode=400;
        res.write("kindly enter secret key first");
        res.end();
        return;
    }
    if(header==secret)
    {
        res.statusCode=201;
        res.write("Welcome user");
        res.end();
        return;
    }
    else{
        res.statusCode=401;
        res.write("invalid user!!");
        res.end();
        return;
    }

    // console.log(req.headers)
    // console.log(res.headers)
    // res.write("http server");
    // res.end();

})

server.listen(3001,()=>{
    console.log("server is running at port 3001")
})