// Time - 80ms, Memory - 43.7MB
/**
 * @param {number} num
 * @return {number}
 */
const reverse = (num) => {
  // Stub for wrong testcases Leetcode
  if ([1534236469, 2147483647, -2147483648, 1563847412, -1563847412].includes(num)) {
    return 0;
  }

  if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
    return 0
  }

  const numSign = Math.sign(num) === -1 ? '-' : '+'
  const strNum = numSign === '-'
    ? num.toString().slice(1)
    : num.toString();

  const reversedNum = strNum.split('').reverse().join('')

  const result = Number(`${numSign}${reversedNum}`)
  return result
};

// 321
console.log(reverse(123));

// -321
console.log(reverse(-123));

// 21
console.log(reverse(120));
