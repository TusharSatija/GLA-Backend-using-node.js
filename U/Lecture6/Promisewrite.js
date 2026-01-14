let fs=require('fs/promises');

let path=__dirname+'/abc.txt';

fs.writeFile(path,"learning writefile in node js using promises ")
.then(()=>{
    console.log("done Successfully...");
})
.catch((err)=>{   
    console.log(err);
})