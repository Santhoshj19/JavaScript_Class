let obj = {
  first_name: "David",
  hello: function () {
    console.log("My name is " + this.first_name);
  },
};

obj.hello();
console.log(obj.first_name);
