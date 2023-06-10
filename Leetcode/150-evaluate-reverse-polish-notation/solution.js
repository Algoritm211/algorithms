// Time - 66ms, Memory - 44.5MB, O(n) time, O(n) space
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  // We have to use stack approach here

  const operationMap = new Map([
    ['+', (num1, num2) => num1 + num2],
    ['-', (num1, num2) => num1 - num2],
    ['*', (num1, num2) => num1 * num2],
    ['/', (num1, num2) => num1 / num2 < 0 ? Math.ceil(num1 / num2) : Math.floor(num1 / num2)],
  ]);

  const stackResult = [];

  for (let i = 0; i < tokens.length; i++) {
    if (operationMap.has(tokens[i])) {
      const num2 = Number(stackResult.pop());
      const num1 = Number(stackResult.pop());
      const funcForOperation = operationMap.get(tokens[i]);
      const resultOfOperation = funcForOperation(num1, num2);
      console.log(num1, num2, tokens[i], resultOfOperation);
      stackResult.push(resultOfOperation)
      continue;
    }
    stackResult.push(Number(tokens[i]));
  }

  const finalResult = stackResult.at(0);
  return finalResult;
};

// 9
console.log(evalRPN(['2', '1', '+', '3', '*']));

// 6
console.log(evalRPN(['4', '13', '5', '/', '+']));

// 22
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));

