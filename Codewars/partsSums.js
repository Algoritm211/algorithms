
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

const partsSums = (initialArray) => {
  const array = [...initialArray];

  const result = [];

  let initialSum = 0;

  while (array.length) {
    initialSum += array.pop();
    result.push(initialSum);
  }

  result.unshift(0);

  return result.reverse();
}

