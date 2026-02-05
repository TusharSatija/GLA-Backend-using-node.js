let math=require('./Math');
console.log(math.pi);
console.log(math.add(2,4));
console.log(math.product(2,4));
console.log(math.square(2));


let {pi,add,product}=require('./Math');
console.log(pi);
console.log(add(2,4));
console.log(product(2,4));
