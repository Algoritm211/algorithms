// Time - 78ms, Memory - 43.3MB
/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = (num) => {
  const x = Math.log(num);
  const a = Math.log(4)

  return Number.isInteger(x / a);
};

/**
 * Here we have a formula that log a X = ln x / ln a
 * And we have function in JS called Math.log() which counts natural logarithm ( Math.log(x) = ln(x) )
 */

// true
console.log(isPowerOfFour(16));

// false
console.log(isPowerOfFour(5));

// true
console.log(isPowerOfFour(1));
