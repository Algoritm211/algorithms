// Time - 55ms, Memory - 41.8MB
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const splittedPattern = pattern.split('');
  const splittedString = s.split(' ');

  const notEqualLength = splittedString.length !== splittedPattern.length
  const notEqualUniqueValuesLength = new Set(splittedString).size !== new Set(splittedPattern).size

  if (notEqualLength || notEqualUniqueValuesLength) {
    return false
  }

  const checkObj = {};

  for (let i = 0; i < pattern.length; i++) {
    const patternSign = splittedPattern[i];
    const word = splittedString[i];
    if (!checkObj.hasOwnProperty(patternSign)) {
      checkObj[patternSign] = word;
    } else if (checkObj[patternSign] !== word) {
      return false
    }
  }

  return true;
};

// false
console.log(wordPattern('abba', 'dog dog dog dog'));

// true
console.log(wordPattern('abba', 'dog cat cat dog'));

// false
console.log(wordPattern('abba', 'dog cat cat fish'));

// false
console.log(wordPattern('aaaa', 'dog cat cat dog'));
