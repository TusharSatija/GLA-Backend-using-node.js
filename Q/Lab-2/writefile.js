let fs=require('fs');

// let path=C:\Users\Lenovo\Desktop\GLA-Backend\Q\Lab-2
let path=__dirname+'/data.txt';

fs.writeFile(path,"hello learning filesystem",(err)=>{
    if(err)
    {       
        console.log(err);
    }
    else{
        console.log("done successfully....");
    }
})
// console.log(__dirname);