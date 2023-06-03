// Time - 121ms, Memory 46.5, O(n) time, O(n) space
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const minWindow = (str1, str2) => {
  // Here we need to use sliding window technique

  if (str2.length > str1.length) {
    return '';
  }

  if (str1 === str2) {
    return str1;
  }

  const firstCountMap = new Map();
  const windowMap = new Map();

  const addToMap = (map, elem) => {
    map.has(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  };

  for (let i = 0; i < str2.length; i++) {
    addToMap(firstCountMap, str2[i]);
  }

  let have = 0;
  let need = firstCountMap.size;

  let resultPointers = [-1, -1]; // default values
  let resultLength = Infinity;

  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < str1.length; rightPointer++) {
    const current = str1[rightPointer];
    addToMap(windowMap, current);

    if (firstCountMap.has(current) && windowMap.get(current) === firstCountMap.get(current)) {
      have += 1;
    }

    while (need === have) {
      if (rightPointer - leftPointer < resultLength) {
        resultPointers = [leftPointer, rightPointer];
        resultLength = rightPointer - leftPointer;
      }

      windowMap.set(str1[leftPointer], windowMap.get(str1[leftPointer]) - 1);

      if (firstCountMap.has(str1[leftPointer]) && windowMap.get(str1[leftPointer]) < firstCountMap.get(str1[leftPointer])) {
        have -= 1;
      }
      leftPointer += 1;
    }
  }

  const result = str1.slice(resultPointers.at(0), resultPointers.at(1) + 1);
  return result;
};

// b
console.log(minWindow('abc', 'b'));

// ab
console.log(minWindow('abc', 'ab'));

// a
console.log(minWindow('ab', 'a'));

// b
console.log(minWindow('abc', 'b'));

// BANC
console.log(minWindow('ADOBECODEBANC', 'ABC'));

// a
console.log(minWindow('a', 'a'));

// ''
console.log(minWindow('a', 'aa'));
