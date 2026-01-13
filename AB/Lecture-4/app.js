let p=new Promise((res,rej)=>{
   res();  
})
console.log(p);

let p1= new Promise((res,rej)=>{
    rej();
})
console.log(p1);

let p2= new Promise((res,rej)=>{

})
console.log(p2);


let r=Math.floor(Math.random()*10);
console.log(r);

// write a program to check a no if even then resolve it else reject.

let p3=new Promise((res,rej)=>{
    if(r%2==0)
        res();
    else
        rej()
});