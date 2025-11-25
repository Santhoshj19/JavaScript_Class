// class house {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }
// let value = new house("david", "red");
// console.log(value);
// let final = new house("Ram", "Green");
// console.log(final);

class house {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log("My house name is " + this.name);
  }
}
class myhouse extends house{}
let value = new myhouse("Ram");
value.myhouse();
