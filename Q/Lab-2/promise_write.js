let fs=require('fs/promises');

let path=__dirname+'/data.txt'
fs.writeFile(path,"learing fs system writefile fn using promises")
.then(()=>{
    console.log("done successfully.....");
})
.catch((err)=>{
    console.log(err);
})