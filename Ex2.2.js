const binaryToInteger = (arr) => {
    let i = arr.length - 1;
    let index = -1;
    let sum = 0;
    while (i >= 0) {
        sum += 2 ** (index * (-1) - 1) * arr[i];
        index--;
        i--;
    }
    return sum;
}

console.log(binaryToInteger([0, 0, 0, 1]));
console.log(binaryToInteger([0, 0, 1, 0]));
console.log(binaryToInteger([0, 1, 0, 1]));
console.log(binaryToInteger([1, 0, 0, 1]));
console.log(binaryToInteger([0, 0, 1, 0]));
console.log(binaryToInteger([0, 1, 1, 0]));
console.log(binaryToInteger([1, 1, 1, 1]));
console.log(binaryToInteger([1, 0, 1, 1]));




// Testing:  ==> 1
// Testing:  ==> 2
// Testing:  ==> 5
// Testing:  ==> 9
// Testing:  ==> 2
// Testing:  ==> 6
// Testing:  ==> 15
// Testing:  ==> 11
