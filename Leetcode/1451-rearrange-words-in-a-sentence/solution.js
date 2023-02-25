// Time - 65ms, Memory - 46.2MB
/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = (text) => {
  const sortedStrings = text
    .toLowerCase()
    .split(' ')
    .sort((a, b) => a.length - b.length);

  sortedStrings[0] = `${sortedStrings[0].slice(0, 1).toUpperCase()}${sortedStrings[0].slice(1)}`

  const result = sortedStrings.join(' ')
  return result;
};

// Is cool leetcode
console.log(arrangeWords('Leetcode is cool'));

// On and keep calm code
console.log(arrangeWords('Keep calm and code on'));

// To be or to be not
console.log(arrangeWords('To be or not to be'));
