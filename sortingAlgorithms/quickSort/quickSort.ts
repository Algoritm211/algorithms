
const quickSortTestArr = [1, 5, 10, 14, -6, -12, -3, 19];

/**
 * Average complexity - O(n log(n))
 *
 * Worst - O(n^2)
 */
const quickSort = (array: Array<number>): Array<number> => {
  if (array.length < 2) {
    return array;
  }
  // We need to pick random ~mid elem of array for better speed
  const midIndex = Math.floor(Math.random() * array.length)
  const pivot = array[midIndex];

  const less = [];

  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i])
    } else if (array[i] > pivot) {
      greater.push(array[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
