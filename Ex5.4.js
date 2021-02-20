const toWeirdCase = (string) => {
    return string.split('').map((letter, index) =>
     index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
}

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"











// const toWeirdCase = (string) => {
//     return string.split('').map((letter, index) => {
//         if (index % 2 === 0) return letter.toUpperCase()
//         else {
//             return letter.toLowerCase()
//         }
//     }).join('')
// }