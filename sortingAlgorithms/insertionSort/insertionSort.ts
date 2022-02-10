
const arr = [1, 5, 10, 14, -6, -12, -3, 19];

/**
 * Complexity - O(n^2)
 */
const insertionSort = (initialArray: Array<number>) => {
  const array = [...initialArray];

  for (let i = 0; i < array.length; i++) {
    let n = i;
    let temp = 0;

    while (n > 0 && array[n] < array[n - 1]) {
      temp = array[n]
      array[n] = array[n - 1]
      array[n - 1] = temp;
      n -= 1;
    }

  }

  return array;
}

console.log(insertionSort(arr));
