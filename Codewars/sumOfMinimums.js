const sumOfMinimums = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.min(...arr[i])
  }

  return result;
}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
