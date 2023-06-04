// Time - 58ms, Memory - 42.1MB, O(n) time, O(n) memory
/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = (str) => {
  const bracesMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  const bracesStack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    const isStart = bracesMap.has(char) && char !== bracesMap.get(char);

    if (bracesStack.length === 0 && !isStart) {
      return false;
    }

    if (char === bracesMap.get(bracesStack.at(-1))) {
      bracesStack.pop();
      continue;
    }

    bracesStack.push(char);
  }

  return bracesStack.length === 0;
};

// false
console.log(isValid('(])'));

// false
console.log(isValid(']'));

// true
console.log(isValid('()'));

// true
console.log(isValid('()[]{}'));

// false
console.log(isValid('(]'));
