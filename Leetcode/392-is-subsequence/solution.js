// Time - 1ms, Memory - 49.52MB
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s.length > t.length) {
    return false;
  }

  let i = 0;
  let j = 0;

  while(i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length
};

// true
console.log(isSubsequence('abc', 'ahbgdc'));

// false
console.log(isSubsequence('axc', 'ahbgdc'));
