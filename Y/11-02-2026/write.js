let fs=require('fs/promises');
let path=__dirnamae+'/data.txt';

fs.writeFile(path,"learning fs module")
    .then(()=>{
        console.log("done successfully");
    })
    .catch((err)=>{
        console.log(err);
})