const toCamelCase = (str) => {
    // console.log(str.replace(/-_/ig, '.'));
    let i;
    let newStr = '';
    for (i = 0; i < str.length; i++) {
        if (!(str[i] === '-' || str[i] === '_')) {
            newStr += str[i];
        }
    }
    return newStr;
}



console.log(toCamelCase('the-stealth-warrior')); // returns "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')); // returns "TheStealthWarrior"



