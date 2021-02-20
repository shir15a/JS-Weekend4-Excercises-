const organizeStrings = (str1, str2) => {
    let n = [];
    const unionStr = str1 + str2;
    unionStr.split('').forEach((letter) => {
        if (!n.includes(letter)) {
            n.push(letter)
        }
    })
    return n.join('');
}



str1 = "xyaabbbccccdefww";
str2 = "xxxxyyyyabklmopq";
console.log(organizeStrings(str1, str2));

a = "abcdefghijklmnopqrstuvwxyz"
console.log(organizeStrings(a, a));

