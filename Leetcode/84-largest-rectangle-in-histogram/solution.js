// Time - 466ms, Memory - 141MB, O(n) time, O(n) memory
/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  // We have to use stack approach here

  // We will store indexes and heights, push it to the stack
  // if new value will be lower than previous -
  // we will pop previous heights before even lower than new and count all areas

  let maxArea = -Infinity;

  const stack = [];
  // constants for map keys
  const INDEX = 'index';
  const HEIGHT = 'height';

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    let startIndex = i;

    while (currentHeight < stack.at(-1)?.get(HEIGHT)) {
      const length = i - stack.at(-1).get(INDEX);
      const height = stack.at(-1).get(HEIGHT);
      maxArea = Math.max(maxArea, length * height);
      startIndex = stack.at(-1).get(INDEX);
      stack.pop();
    }

    maxArea = Math.max(maxArea, currentHeight);
    stack.push(new Map([
      [INDEX, startIndex],
      [HEIGHT, currentHeight],
    ]));
  }

  // Now we have in the stack heights of bars, which length continue
  // to the end, so we need to count this horizontal area

  for (let i = 0; i < stack.length; i++) {
    const length = heights.length - stack.at(i).get(INDEX);
    const height = stack.at(i).get(HEIGHT);

    maxArea = Math.max(maxArea, length * height);
  }

  return maxArea;
};

// 3
console.log(largestRectangleArea([2, 1, 2]));

// 20
console.log(largestRectangleArea([3, 6, 5, 7, 4, 8, 1, 0]));

// 10
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

// 4
console.log(largestRectangleArea([2, 4]));
