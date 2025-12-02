function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isdata = 1;
      if (isdata) {
        resolve("Fetched data");
      } else {
        reject("No data fetch");
      }
    }, 3000);
  });
}

function arrangedata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Arranged data");
    }, 2000);
  });
}

function displaydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Display data");
    }, 1000);
  });
}
fetchdata()
  .then((message) => {
    console.log(message);
    return arrangedata();
  })
  .then((message) => {
    console.log(message);
    return displaydata();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("completed");
  });
