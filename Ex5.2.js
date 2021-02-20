const repeatStr = (repeat, str) => {
    let i = 0;
    let repeatStrring = '';
    while (i < repeat) {
        repeatStrring += str;
        i++;
    }
    return repeatStrring;
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));


