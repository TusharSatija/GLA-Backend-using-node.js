let fs=require('fs/promises');
let path=__dirname+'/abc.txt';
fs.writeFile(path,"write content using promises")
.then(()=>{
    console.log("Done");
})
.catch((err)=>{
    console.log(err)
})