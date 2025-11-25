function speeding() {
  let speed = 0;
  return function accerlate() {
    speed = speed + 10;
    console.log("Speed is " + speed);
  };
}
let car = speeding();
car();
