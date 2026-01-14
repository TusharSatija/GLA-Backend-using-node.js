// argv :  is an array  while execution we can give input and store them in it

console.log(process.argv);

let user = process.argv[3]  || "user";
console.log(user);