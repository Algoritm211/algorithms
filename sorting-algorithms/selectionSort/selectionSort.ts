
const array = [19, 5, 10, 14, -6, -12, -3]

class SelectionSort {

  /**
   * First variant of selection sort (with selection max element)
   *
   * Complexity - O(n^2)
   */
  selectionSortMax(initialArray: Array<number>) {
    const array = [...initialArray];

    for (let n = 0; n < array.length - 1; n++) {
      let max = -Infinity;
      let elementIndex = 0;
      for (let i = 0; i < array.length - 1 - n; i++) {
        if (max < array[i]) {
          max = array[i]
          elementIndex = i
        }
      }

      array[elementIndex] = array[array.length - 1 - n]
      array[array.length - 1 - n] = max
    }

    return array
  }

  /**
   * Second variant of selection sort (with selection min element)
   *
   * Complexity - O(n^2)
   */
  selectionSortMin(initialArray: Array<number>) {
    const array = [...initialArray];

    for (let n = 0; n < array.length - 1; n++) {
      let min = Infinity;
      let elementIndex = 0;
      for (let i = n; i <= array.length - 1; i++) {
        if (min > array[i]) {
          min = array[i];
          elementIndex = i;
        }
      }

      array[elementIndex] = array[n];
      array[n] = min;
    }

    return array;
  }
}
