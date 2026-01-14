// let math=require('./math');

// console.log(math.sum(3,6));
// console.log(math.product(4,7));

let {sum, product}=require('./math');

console.log(sum(3,7));
console.log(product(56,7));



let person={
    name :"abc"
}
let {name}=person;
console.log(name);