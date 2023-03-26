// Time - 75ms, Memory - 42.8MB
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const firstLetters = {};
  const secondLetters = {};

  const addLetters = (letterObj, letter) => {
    if (!Object.hasOwn(letterObj, letter)) {
      letterObj[letter] = 1;
    } else {
      letterObj[letter] += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    addLetters(firstLetters, s[i]);
    addLetters(secondLetters, t[i]);
  }

  return Object.entries(firstLetters).sort().join()
    === Object.entries(secondLetters).sort().join();
};

// true
console.log(isAnagram('anagram', 'nagaram'));

// false
console.log(isAnagram('rat', 'car'));

