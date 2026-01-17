let fs=require('fs');

let path=__dirname+"/data.txt"
fs.writeFile(path,"learning node js fs",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("done Successfully .....")
});

// let path="C:\Users\PC\Desktop\GLA-Backend-using-node.js\AB\Lab-2" 
// console.log(__dirname);
