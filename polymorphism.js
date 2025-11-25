class mobile {
  buy() {
    console.log("I am buying the phone");
  }
}
class apple extends mobile {
  buy() {
    console.log("I am buying the iphone");
  }
}
class samsung extends mobile {
  buy() {
    console.log("I am buying the Samsung");
  }
}
let value1 = new mobile();
value1.buy();
let value = new apple();
value.buy();
