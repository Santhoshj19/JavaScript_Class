function hello() {
  console.log("hello");
}
hello();

function hello1(name) {
  console.log("hello " + name);
}
hello1("Ram");

//return function
function hello2(name) {
  return name;
}
let hello3 = hello2("Sam");
console.log(hello3);

//Example
function sum(a, b) {
  return a + b;
}
// let add = sum(1 , 10);
console.log(sum(100, 10));
