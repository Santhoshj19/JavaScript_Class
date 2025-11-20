// let array = [1, 2, 3, 4, 5];
// let final = 5;
// let solution = [ ];
// for (let i = 0; i <= array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//    if(array[i]+array[j]==final) {
//         solution.push([i,j]);
//     }
//   }
// }
// console.log(solution);

let array = [1, 0, 0, 0, 0, 0, 1];
let tree = 3;
let count = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    let prev_value = array[i - 1];
    let next_value = array[i + 1];
    if (prev_value == 0 && next_value == 0) {
      count++;
    }
  }
}
console.log(tree == count);
