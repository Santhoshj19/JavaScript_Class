let obj = [
  {
    name: "Apple",
    version: "A",
  },
  {
    name: "Vivo",
    version: "B",
  },
  {
    name: "Oppo",
    version: "C",
  },
];

//filter
console.log("Filter");
let value = obj.filter((value) => value.name === "Vivo");
console.log(value);
let value1 = obj.filter((value1) => console.log(value1));

//map
console.log("Map");
obj.map((value1) => console.log(value1));
