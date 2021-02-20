const countingDuplicates = (str) => {
    let letterObj = {}
    const strLowerCase = str.toLowerCase()
    for (let letter of strLowerCase) {
        letter in letterObj ? letterObj[letter]++ : letterObj[letter] = 1;
    }
    return Object.keys(letterObj).filter((item) => letterObj[item] > 1).length
}

console.log(countingDuplicates('Abcde'));
console.log(countingDuplicates('aabBcde'));
console.log(countingDuplicates('indivisibility'));
console.log(countingDuplicates('Indivisibilities'));
console.log(countingDuplicates('aA11'));
console.log(countingDuplicates('ABBA'));





// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice