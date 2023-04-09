// Time - 71ms, Memory - 50MB
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maximumArea = -Infinity;

  while (leftPointer < rightPointer) {
    const width = rightPointer - leftPointer;
    const area = width * Math.min(height[leftPointer], height[rightPointer]);
    maximumArea = Math.max(area, maximumArea);

    if (height[leftPointer] > height[rightPointer]) {
      rightPointer -= 1;
    } else {
      leftPointer += 1;
    }
  }

  return maximumArea;
};

// 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 1
console.log(maxArea([1, 1]));
