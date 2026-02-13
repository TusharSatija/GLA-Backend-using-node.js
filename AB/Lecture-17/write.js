let fs=require('fs');
let path=__dirname+'/a.txt';

fs.writeFile(path,"learing fs module write fn",(err)=>{
    if(err)
        console.log(err)
    else
        console.log("Write successfully....")
})