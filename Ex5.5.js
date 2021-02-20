const abbreviate = (string) => {
    return string[0] +'.' + string[string.indexOf(' ') +1]
}

console.log(abbreviate('Shir Admon'));