const shellSortTestArr = [34, 5, 10, 14, -6, 12, 25, 19];

/**
 * Complexity - O(n log(n))
 *
 * Worst - O(n (log(n))^2)
 */
const shellSort = (array: Array<number>) => {

  let gap = Math.floor(array.length / 2);

  while (gap > 0) {

    for (let i = 0; i < array.length - gap; i++) {
      let currentIndex = i;
      let pairGapIndex = i + gap;

      while (currentIndex >= 0 && array[pairGapIndex] < array[currentIndex]) {
        const temp = array[currentIndex];
        array[currentIndex] = array[pairGapIndex];
        array[pairGapIndex] = temp;

        pairGapIndex = currentIndex;
        currentIndex -= gap;
      }

    }
      gap = Math.floor(gap / 2);
  }

  return array
}

console.log(shellSort(shellSortTestArr));
