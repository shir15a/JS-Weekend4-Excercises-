const bus = (arr) => {
    let people = 0;
    for (let i = 0; i < arr.length; i++) {
            people += arr[i][0]
            people -= arr[i][1]
    }
    console.log(people);
}

bus([[10, 0], [5, 5], [10, 3], [2, 1], [20, 30]]);


