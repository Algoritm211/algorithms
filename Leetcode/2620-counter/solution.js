// Time - 57ms, Memory - 42.1MB
/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
  let initialValue = n - 1
  return function() {
    return initialValue += 1;
  };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

