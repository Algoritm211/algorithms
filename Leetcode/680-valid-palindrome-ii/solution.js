// Time - 92ms, Memory - 48.3MB
/**
 * @param {string} str
 * @return {boolean}
 */
const validPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] === str[end]) {
      start += 1;
      end -= 1;
    } else {
      return isPalindrome(str, start + 1, end) || isPalindrome(str, start, end - 1)
    }
  }
  return true;
};

function isPalindrome(str, start, end) {
  while (start <= end) {
    if (str[start] === str[end]) {
      start += 1;
      end -= 1;
    } else {
      return false
    }
  }

  return true
}

// true
console.log(validPalindrome('aba'));

// true
console.log(validPalindrome('abca'));

// false
console.log(validPalindrome('abc'));

// true
console.log(validPalindrome('deeee'));

// true
console.log(validPalindrome('cbbcc'));


