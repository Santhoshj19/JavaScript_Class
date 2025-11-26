function addmoney(value, callback) {
  setTimeout(() => {
    console.log("Amount added :" + value);
    callback(value);
  }, 2000);
}
function balancemoney(value) {
  console.log("Balance amount : " + value);
}

addmoney(3000, balancemoney);
