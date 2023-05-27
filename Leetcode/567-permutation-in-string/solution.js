// Time - 96ms, Memory - 45.9MB, O(26n) time, O(1) space
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const checkInclusion = function (str1, str2) {
  // Here we have to use sliding window approach

  if (str1 === '' && str2 === '') return false;
  if (str1.length > str2.length) return false;

  const firstStringLetters = new Map();
  const secondStringLetters = new Map();

  for (let i = 0; i < str1.length; i++) {
    firstStringLetters.has(str1[i])
      ? firstStringLetters.set(str1[i], firstStringLetters.get(str1[i]) + 1)
      : firstStringLetters.set(str1[i], 1);

    secondStringLetters.has(str2[i])
      ? secondStringLetters.set(str2[i], secondStringLetters.get(str2[i]) + 1)
      : secondStringLetters.set(str2[i], 1);
  }

  const isTwoMapsEqual = (map1, map2) => {
    if (map1.size !== map2.size) {
      return false
    }

    for (const [key, value] of map1) {
      if (!map2.has(key) || value !== map2.get(key)) {
        return false;
      }
    }

    return true
  }


  let leftPointer = 0;
  for (let rightPointer = str1.length; rightPointer <= str2.length; rightPointer++) {
    if (isTwoMapsEqual(firstStringLetters, secondStringLetters)) {
      return true
    }
    secondStringLetters.has(str2[rightPointer])
      ? secondStringLetters.set(str2[rightPointer], secondStringLetters.get(str2[rightPointer]) + 1)
      : secondStringLetters.set(str2[rightPointer], 1);

    if (secondStringLetters.get(str2[leftPointer]) === 1) {
      secondStringLetters.delete(str2[leftPointer]);
    } else {
      secondStringLetters.set(str2[leftPointer], secondStringLetters.get(str2[leftPointer]) - 1);
    }
    leftPointer += 1;
  }

  return false;
};

// true
console.log(checkInclusion('abc', 'cccccbabbbaaaa'));

// false
console.log(checkInclusion('abc', 'ccccbbbbaaaa'));

// true
console.log(checkInclusion('adc', 'dcda'));

// false
console.log(checkInclusion('hello', 'ooolleoooleh'));

// true
console.log(checkInclusion('ab', 'eidbaooo'));

// false
console.log(checkInclusion('ab', 'eidboaoo'));
