function display(value) {
  console.log(value);
}

// Cách viết thứ nhất
async function sayHello() {
  return "Hello";
}

// Cách viết thứ 2
async function sayHello2() {
  return Promise.resolve("Hello");
}

sayHello().then(
  function (value) {
    display(value);
  },
  function (error) {
    display(error);
  }
);
