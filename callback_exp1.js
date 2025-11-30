//asynchronous execution without callback

function fetchdata() {
  setTimeout(() => {
    console.log("Fetched data");
  }, 4000);
}
function arrangedata() {
  setTimeout(() => {
    console.log("Arranged data");
  }, 3000);
}
function displaydata() {
  setTimeout(() => {
    console.log("Displayed data");
  }, 2000);
}
fetchdata();
arrangedata();
displaydata();

//asynchronous execution with callback

function fetchdata(callback) {
  setTimeout(() => {
    console.log("Fetched data");
    callback();
  }, 4000);
}
function arrangedata(callback) {
  setTimeout(() => {
    console.log("Arranged data");
    callback();
  }, 3000);
}
function displaydata() {
  setTimeout(() => {
    console.log("Displayed data");
  }, 2000);
}

fetchdata(() => {
  arrangedata(() => {
    displaydata();
  });
});
