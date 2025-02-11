// Time - 1ms, Memory - 50.68MB
/**
 * @param {string} string
 * @return {string}
 */
const reverseWords = (string) => {
  return string
      .trim()
      .split(' ')
      .filter(elem => elem !== '')
      .reverse()
      .join(' ')
};

// "blue is sky the"
console.log(reverseWords('the sky is blue'));

// "world hello"
console.log(reverseWords('  hello world  '));

// "example good a"
console.log(reverseWords('a good   example'));