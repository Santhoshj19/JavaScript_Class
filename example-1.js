function outer() {
  let name1 = "ramesh";
  console.log(name1);

  function inner() {
    let name2 = "Suresh";
    console.log(name2);
    console.log("--------");
  }
  inner();
}
outer();

outer();
