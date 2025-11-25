class house {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log("My house name is " + this.name);
  }
}
class myhouse extends house {}
let value = new myhouse("Ram");
value.myhouse();
