//asynchronous execution without callback

// function first() {
//   setTimeout(() => {
//     console.log("First executed");
//   }, 3000);
// }
// function second() {
//   console.log("Second executed");
// }
// first();
// second();

//------------

//asynchronous execution with callback

function first(callback) {
  setTimeout(() => {
    console.log("First executed");
    callback();
  }, 3000);
}
function second() {
  console.log("Second executed");
}
first(second);
