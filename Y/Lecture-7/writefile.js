let fs= require('fs');
let path=__dirname+"/data.txt";
fs.writeFile(path,"learning node js fs",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("done successfully ...")
})




// console.log(__dirname);