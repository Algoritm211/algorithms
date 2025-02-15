// Time - 8ms, Memory - 54.8MB, O(n) time, O(n) memory
/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = (str) => {
  const charSet = new Set();
  let result = 0;

  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < str.length) {
    while (charSet.has(str[rightPointer])) {      
      charSet.delete(str[leftPointer]);
      leftPointer++
    }

    charSet.add(str[rightPointer]);
    
    result = Math.max(result, charSet.size);
    rightPointer++;
  }

  return result;
};

// 3
console.log(lengthOfLongestSubstring('abcabcbb'));

// 1
console.log(lengthOfLongestSubstring('bbbbb'));

// 3
console.log(lengthOfLongestSubstring('pwwwkew'));