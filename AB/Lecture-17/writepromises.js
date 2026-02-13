let fs=require('fs/promises');
let path=__dirname+'/b.txt'

fs.writeFile(path,"fs/promise module write fn")
.then(()=>{
    console.log("done");
})
.catch(()=>{
    console.log(err)
})