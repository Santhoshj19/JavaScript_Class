function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isdata = false;
      if (isdata) {
        console.log("Fetched data");
        resolve();
      } else {
        console.log("No data fetch");
        reject();
      }
    }, 3000);
  });
}

function arrangedata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Arranged data");
      resolve();
    }, 2000);
  });
}

function displaydata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display data");
      resolve();
    }, 1000);
  });
}
async function run() {
  //   await fetchdata();
  //   await arrangedata();
  //   await displaydata();
  //   console.log("Completed");
  try {
    await fetchdata();
    await arrangedata();
    await displaydata();
  } catch (error) {
    console.log("Error in the data");
  }
}
run();
