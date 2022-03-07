const countingSortTest = [1, 3, 3, 2, 9, 8, 4, 1, 8, 5, 3, 6]

/**
 * Complexity
 */
const countingSort = (arr: Array<number>, min: number, max: number) => {
  const resultArr: Array<number> = [];
  const subArray: Array<number> = [];

  for (let i = min; i <= max; i++) {
    subArray[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    subArray[arr[i]] += 1
  }

  for (let i = min; i < max; i++) {
    while (subArray[i] > 0) {
      resultArr.push(i)
      subArray[i] -= 1;
    }
  }

  return resultArr;
}


console.log(countingSort(countingSortTest, 1, 9));

