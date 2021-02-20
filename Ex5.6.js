const maskify = (password) => {
    if (password.length > 4)
        return '#'.repeat(password.length - 4) + password.slice(-4)
    return password

}


console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));
console.log(maskify("Skippy"));
console.log(maskify("1"));
console.log(maskify(""));

// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""