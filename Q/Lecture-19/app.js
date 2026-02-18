let {URL}=require('url');

//let url=new URL("https://localhost:3000/path/abc?name='tushar'#section");

let newurl="http://example.com:8000/path/test1?user=abc&id=1212#about"

let url=new URL(newurl);
console.log(url.host);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
console.log(url.port);
console.log(url.protocol);
console.log(url.searchParams.get('user'));
console.log(url.searchParams.get('id')); 