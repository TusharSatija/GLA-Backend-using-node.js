let fs=require('fs/promises');

let path=__dirname+'/w.txt';
fs.writeFile(path,"learning node js fs using promises")
.then(()=>{
   console.log("done ") 
})
.catch((err)=>{
    console.log(err);
})