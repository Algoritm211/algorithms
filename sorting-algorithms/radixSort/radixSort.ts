import {getDigitNum, getLargestNumber} from './utils';

const radixSortTest = [5, 1, 10, 14, 6, 12, 3, 19, 4];

/**
 * Complexity: n * k (k - length of longest key)
 */
const radixSort = (initialArr: Array<number>) => {
  let arr = [...initialArr];
  const largestNumber = getLargestNumber(arr);

  for (let i = 0; i < largestNumber; i++) {
    const bucket = Array.from({length: 10}, () => [] as Array<number>);

    for (let j = 0; j < arr.length; j++) {
      const digitNum = getDigitNum(arr[j], i);
      bucket[digitNum].push(arr[j]);
    }

    arr = bucket.flat();
  }

  return arr;
}

console.log(radixSort(radixSortTest));
