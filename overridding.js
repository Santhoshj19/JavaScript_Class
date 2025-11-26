class bank {
  bankbalance() {
    console.log("my bank balance");
  }
}
class newbalance extends bank {
  bankbalance(number) {
    console.log("New bank balance "+ number);
  }
}
let value = new bank();
value.bankbalance();
