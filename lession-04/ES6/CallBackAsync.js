let saySomething = setInterval(sayHello, 2000);
let count = 0;

function sayHello() {
  console.log("Welcome to C08");
  count++;
  if (count == 10) {
    clearInterval(saySomething);
  }
}
