const findNextSquare = (n) => {
    let nSqrt = Math.sqrt(n);
    if ((Math.sqrt(n) % 1) != 0) return -1;
    return (nSqrt + 1) ** 2;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));


// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect