const tribonacci = (n) =>{
    if(n === 1) return 0;
    else if(n === 2) return 0;
    else if(n === 3) return 1;
    let fibonacciArr = [];
    let i;
    fibonacciArr[0] = 1;
    fibonacciArr[1] = 1;
    fibonacciArr[2] = 1;
    for (i = 3; i < n; i++) {
        fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]+fibonacciArr[i - 3]);
    }
    return fibonacciArr[n - 1];

}

console.log(tribonacci(1));
console.log(tribonacci(5));
