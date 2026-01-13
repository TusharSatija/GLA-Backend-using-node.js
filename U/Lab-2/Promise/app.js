// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

let p= new Promise((res,rej)=>{
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