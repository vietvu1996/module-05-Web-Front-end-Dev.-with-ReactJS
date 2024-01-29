// function fibonacci(num: number): number {
//     if (num < 2) {
//         return num;
//     } else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }
//
// let sum = 0;
// for (let i = 0; i < 20; i++) {
//     let fibonacciNumber = fibonacci(i);
//     console.log(fibonacciNumber);
//     sum += fibonacciNumber;
// }
//
// console.log("Sum of fibonacci numbers are " + sum);
function fibonacciSum(number) {
    var fibArray = [1, 1];
    var sum = 0;
    for (var i = 2; i <= number; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        sum += fibArray[i];
    }
    return sum;
}
var number = 20;
var fibNumbers = [];
var fibTotal = fibonacciSum(number);
console.log("T\u1ED5ng c\u1EE7a ".concat(number, " s\u1ED1 Fibonacci l\u00E0: ").concat(fibTotal));
