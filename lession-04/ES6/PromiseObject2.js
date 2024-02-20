let count = 0;
let test = null;
const myPromise = new Promise(function (resolve, reject) {
  test = setInterval(function () {
    resolve("Hello World");
  }, 1000);
});

myPromise.then(function (value) {
  console.log(value);
  count++;
});

if (count == 5) {
  clearInterval(test);
}
