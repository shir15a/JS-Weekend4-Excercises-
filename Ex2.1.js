const twoLowestSum = (arr) =>
{
    let sortArr =  arr.sort((a, b) => a - b);
    return (sortArr[0] + sortArr[1]);

}

console.log(twoLowestSum([19, 5, 42, 2, 77]));

