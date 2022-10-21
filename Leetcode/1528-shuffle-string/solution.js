// Time - 107ms, Memory - 44.5MB
/**
 * @param {string} str
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (str, indices) => {
  const lettersMap = {}

  for (let i = 0; i < indices.length; i++) {
    lettersMap[indices[i]] = str[i]
  }

  return Object.values(lettersMap).join('')
};

// More optimized solution with arrays

/*
const restoreString = (s, indices) => {
  const str = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    str[indices[i]] = s[i];
  }

  return str.join('');
};
 */

// leetcode
console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]));

// abc
console.log(restoreString('abc', [0,1,2]));
