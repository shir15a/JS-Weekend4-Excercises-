function Fibonacci(n) {
    if(n==1) return 0 
    let fibonacciArr = [];
    let i;
    fibonacciArr[0] = 1;
    fibonacciArr[1] = 1;
    for (i = 2; i < n; i++) {
        fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
    }
    return fibonacciArr[n - 1];
}


console.log(Fibonacci(1));
console.log(Fibonacci(2));
console.log(Fibonacci(6));