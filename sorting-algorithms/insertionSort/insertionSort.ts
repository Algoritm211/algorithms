
const arr = [5, 1, 10, 14, -6, -12, -3, 19];

/**
 * Complexity - O(n^2)
 */
const insertionSort = (initialArray: Array<number>) => {
  const array = [...initialArray];

  for (let j = 1; j < array.length; j++) {
    const key = array[j]

    let i = j - 1;

    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i];
      i -= 1;
    }

    array[i + 1] = key;
  }

  return array;
}

console.log(insertionSort(arr));
