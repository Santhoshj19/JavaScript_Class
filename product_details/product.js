let data = document.getElementById("product-data");
let statement = "";
async function fetchdata() {
  let respone = await fetch("https://dummyjson.com/products");
  let data=await Response.json();
  console.log(data);
  statement=data.product.map(value)=>{
    console.log("I have code", value);
    return <div class="product">
        <h1>$(value)</h1>
    </div>
  }
}
fetchdata();
