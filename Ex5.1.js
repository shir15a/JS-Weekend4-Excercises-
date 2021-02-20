const trimming = (string) =>{
    return string.split('').slice(1,string.length-1).join('');
}

console.log(trimming('shir'));