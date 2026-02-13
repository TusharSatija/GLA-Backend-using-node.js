let fs=require('fs');
let path=__dirnamae+'/data.txt';

fs.writeFile(path,"learning fs mdule",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("done successfully");
    }
})