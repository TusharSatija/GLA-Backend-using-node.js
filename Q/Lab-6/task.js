let a=true;
setTimeout(()=>{
    while(a){
        count++;
        console.log(count);
    }
},0);
a=!a;
   