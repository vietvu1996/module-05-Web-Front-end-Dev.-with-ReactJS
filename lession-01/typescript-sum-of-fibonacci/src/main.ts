function fibonacci(num: number): number {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

let sum = 0;
for (let i = 0; i < 20; i++) {
    let fibonacciNumber = fibonacci(i);
    console.log(fibonacciNumber);
    sum += fibonacciNumber;
}

console.log("Sum of fibonacci numbers are " + sum);

function fibonacciSum(number: number): number {
    let fibArray = [1, 1];
    let sum: number = 0;

    for (let i = 2; i <= number; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        sum += fibArray[i];
    }
    return sum;
}

const number: number = 20;
const fibNumbers: number[] = [];
const fibTotal: number = fibonacciSum(number);

console.log(`Tổng của ${number} số Fibonacci là: ${fibTotal}`);