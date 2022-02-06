/**
 * Complexity - O(n^2)
 */
const bubbleSort = (initialArray: Array<number>) => {
  // Making copy of existing array. No mutation
  const array = initialArray.slice();

  for (let n = 0; n < array.length - 1; n++) {
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1]
        array[i + 1] = buff;
      }
    }
  }

  return array;
}
