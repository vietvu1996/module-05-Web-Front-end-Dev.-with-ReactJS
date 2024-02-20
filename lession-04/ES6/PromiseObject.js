function display(value) {
  console.log(value);
}

let myPromise = new Promise(function (resolve, reject) {
  // Producing Code
  let x = 0; // success
  //   let x = 5;
  //   error;

  if (x == 0) {
    let students = [
      { id: 1, name: "Tý" },
      { id: 2, name: "Tèo" },
    ];
    resolve(students);
  } else {
    let myError = new Error("404 Not Found");
    reject(myError);
  }
});

myPromise.then({
  // Consuming Code
  function(result) {
    display(JSON.stringify(result));
  },
  function(error) {
    display(JSON.stringify(error));
  },
});

console.log(myPromise);
