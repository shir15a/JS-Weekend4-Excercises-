
const myfilter = (arr, fun) => {
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
      if(fun(arr[i]))
          newArr.push(arr[i]);
  };

  return newArr;
}

const myForEach = (arr, fun) => {
  for(let i = 0; i < arr.length; i++){
      fun(arr[i]);
  };
}

const myMap = (arr, fun) => {
  const newArr = [];

  for(let i = 0; i < arr.length; i++){
      newArr.push(fun(arr[i]));
  };

  return newArr;
}
