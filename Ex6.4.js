const isIsogram = (string) => {
    let lettersObj = {};
    for (let i = 0; i < string.length; i++) {
        if (lettersObj[string[i].toLowerCase()]) return false;
        else { lettersObj[string[i].toLowerCase()] = 1 }
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

 
// isIsogram("Dermatoglyphics") //== true
// isIsogram("aba")// == false
// isIsogram("moOse") //== false 