// Time - 66ms, Memory - 43.7MB
/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
  if (word === word.toUpperCase()) {
    return true
  }

  const [firstLetter, ...otherLetters] = word;

  if (firstLetter === firstLetter.toUpperCase() && !/[A-Z]/.test(otherLetters.join(''))) {
    return true
  }

  return !/[A-Z]/.test(word)
}

// true
console.log(detectCapitalUse('USA'));

// false
console.log(detectCapitalUse('FlaG'));

// true
console.log(detectCapitalUse('g'));

// true
console.log(detectCapitalUse('Leetcode'));
