const shortestWords = (string) => {
    return string.split(' ').sort((a, b) => a.length - b.length).shift();
}


console.log(shortestWords('my name is shir n'));







// const arr = ['a','b','c','d']
// console.log(arr.push('e'));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.unshift('s'));
// console.log(arr);
