const findUniq = (arr) => {
    let i = 0;
    arr.sort((a, b) => a - b);
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

console.log(findUniq([1, 3, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

