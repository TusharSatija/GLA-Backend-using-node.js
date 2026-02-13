let fs=require('fs/promises');
let path=__dirname+'/b.txt';

fs.writeFile(path , "fs/promises module")
.then((err,data)=> {
    console.log("done")
})
.catch((err)=>{
    console.log(err);
})