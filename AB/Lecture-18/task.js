let a=true;
setTimeout(()=>{
    let count =0;
    while(a){
        count++;
        console.log(count);
    }
},0);
a=!a;


