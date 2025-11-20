//global scope
//local scope
//nested scope
//block scope

// let first_name = "amar";
// function name1() {
//   console.log(first_name);
//   let last_name = "akbar";
//   console.log(last_name);
// }

// name1();

let name1 = "John";
function name1() {
  console.log(name1);
  let name2 = "Sam";
  console.log(name2);
  function name3() {
    let name3 = "Ram";
    console.log(name3);
  }
  name3();
}
name1();
name2();
