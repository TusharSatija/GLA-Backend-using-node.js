let fs=require('fs');
// let path="C:\Users\PC\Desktop\GLA-Backend-using-node.js\Q\Lecture-5";
let path=__dirname+'/data.txt';

fs.writeFile(path,"learning  node js fs wrtieFile",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("Done");
})

// console.log(__dirname);

