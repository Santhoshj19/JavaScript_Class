function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data");
    }, 4000);
  });
}

function arrangedata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Arranged data");
    }, 4000);
  });
}

function displaydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display data");
    }, 4000);
  });
}

// fetchdata().then(message)=>{
//     console.log(message);
//     return arrangedata();

// }
