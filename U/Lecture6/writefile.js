let fs=require('fs');
// let path=C:\Users\Lenovo\Desktop\GLA-Backend\U\Lecture6
let path=__dirname+'/data.txt'

fs.writeFile(path,"learning writefile fs using node js",(err)=>{
    if(err)
        console.log(err);
    else     
        console.log("Done successfully....");
})