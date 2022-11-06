// Time - 172ms, Memory - 45.8MB
/**
 * @param {string} str
 * @return {number}
 */
const firstUniqChar = (str) => {

  const result = {};

  for (let i = 0; i < str.length; i++) {
    result[str[i]] = !result.hasOwnProperty(str[i]);
  }

  for (let [key, value] of Object.entries(result)) {
    if (value) {
      return str.indexOf(key);
    }
  }

  return -1;
};

// 0
console.log(firstUniqChar('leetcode'));

// 2
console.log(firstUniqChar('loveleetcode'));

// -1
console.log(firstUniqChar('aabb'));

// -1
console.log(firstUniqChar('aadadaad'));
