const countingSortTest = [1, 3, 3, 2, 9, 8, 4, 1, 8, 5, 3, 6]

/**
 * Complexity n + r (r - biggest number in array)
 */
const countingSort = (arr: Array<number>, min: number, max: number) => {
  const resultArr: Array<number> = [];
  const helperArr: Array<number> = [];

  for (let i = min; i < max; i++) {
    helperArr[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    helperArr[arr[i]] += 1
  }

  for (let i = min; i < max; i++) {
    while (helperArr[i] > 0) {
      resultArr.push(i);
      helperArr[i] -= 1;
    }
  }

  return resultArr;
}


console.log(countingSort(countingSortTest, 1, 9));

