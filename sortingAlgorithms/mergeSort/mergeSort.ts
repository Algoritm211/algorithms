/**
 * Complexity - O(n log(n))
 */
const mergeSort = (array: Array<number>): Array<number> => {
  if (array.length < 2) {
    return array;
  }
  const midIndex = Math.floor(array.length / 2);

  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return mergeArrays(mergeSort(left), mergeSort(right))
}

const mergeArrays = (left: Array<number>, right: Array<number>) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result as Array<number>;
}
