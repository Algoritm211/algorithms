// Time - 61ms, Memory - 42.9MB
/**
 * @param {number} num
 * @return {string[]}
 */
const generateParenthesis = (num) => {
  // We must use here recursive approach, we need to write a backtrack function
  // We will add open bracket if openBrackets < num
  // We will add close bracket if closedBrackets < openBrackets
  // We will have openBrackets === closedBrackets === num, we will have right parenthesis

  const result = [];

  const backtrack = (
    currentBracketsState = '',
    openBrackets = 0,
    closedBrackets = 0
  ) => {
    if (openBrackets === num && closedBrackets === num) {
      result.push(currentBracketsState);
      return;
    }

    if (openBrackets < num) {
      const newBracketsState = currentBracketsState + '(';
      backtrack(newBracketsState, openBrackets + 1, closedBrackets)
    }

    if (closedBrackets < openBrackets) {
      const newBracketsState = currentBracketsState + ')'
      backtrack(newBracketsState, openBrackets, closedBrackets + 1);
    }
  }

  backtrack();
  return result;
};

// ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3));

// ["()"]
console.log(generateParenthesis(1));
