const obj = {
    boolMethod(bool) {
        return bool ? 'Yes' : 'No';
    },
};

console.log(obj.boolMethod(true));