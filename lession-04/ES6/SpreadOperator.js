// Toán tử lan truyền (Spread)
// Giúp mở rộng, lan truyền giá trị của 1 mảng hoặc 1 đối tượng
// Syntax: Sử dụng dấu ...nameArray mà mình muốn copy giá trị duyệt qua/copy giá trị

let arrayA = [1, 2];
let arrayB = [...arrayA, 3, 4];
console.log(arrayB);

let ObjectA = { id: 1, name: "Thìn" };
let ObjectB = { ...ObjectA, name: "Tý", age: 18 };
console.log(ObjectB);
let ObjectC = { name: "Tý", ...ObjectA, age: 18 };
console.log(ObjectC);
console.log("Object C: " + JSON.stringify(ObjectC));