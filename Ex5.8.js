const shortestWords = (string) => {
    const arrStr = string.split(' ');
    let minWordLength = arrStr[0].length
    let word = '';
    for (let i = 1; i < arrStr.length; i++) {
        if (arrStr[i].length < minWordLength) {
            word = (arrStr[i]);
            minWordLength = arrStr[i].length;
        }
    }
    return word;
}




console.log(shortestWords('my name is shir n'));

