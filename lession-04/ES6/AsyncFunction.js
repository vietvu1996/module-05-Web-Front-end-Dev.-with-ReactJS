async function sayHello() {
  let myPromise = new Promise(function (resolve, reject) {
    let x = 0;
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

  let result = await myPromise;
  console.log(result);
}

// sayHello().then(
//   function (value) {
//     display(value);
//   },
//   function (error) {
//     display(error);
//   }
// );

sayHello();
