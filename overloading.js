class dl {
  iseligible(name, age) {
    if ((age = undefined || age < 18)) {
      console.log("Not Eligible");
    } else {
      console.log("Eligible");
    }
  }
}
let value = new dl();
value.iseligible("david", 20);
