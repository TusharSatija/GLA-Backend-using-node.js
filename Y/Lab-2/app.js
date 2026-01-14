console.log("one");
setTimeout(()=>{
    console.log("one.one");
},3000);
console.log("two");
setTimeout(()=>{
    console.log("two.two");
},0);
console.log("three");
setTimeout(() => {
    console.log("three.three");
},1000);



let a=true;
setTimeout(()=>{
    let count=0;
    while(a)
    {
        count++;
        console.log(count);
    }
},0)
a=!a;        