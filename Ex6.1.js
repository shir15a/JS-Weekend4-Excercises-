const accum = (string) => {
    return string.split('').map(mumbling).join('-')
}

const mumbling = (char, index) => {
    const str = char.repeat(index + 1);
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));


// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// const accum = (string) => {
//     let newString = '';
//     let j;
//     for (let i = 0; i < string.length; i++) {
//         newString += string[i].toUpperCase();
//         j = 0;
//         while (j < i) {
//             newString += string[i].toLowerCase();
//             j++;
//         }
//         if (!(i === string.length - 1)) {
//             newString += '-'
//         }
//     }
//     return newString;
// }