// Time 392ms, Memory - 90.2MB, O(n (iterating) * nlog(n) (sorting)) time, O(n) space
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
  // We have to use stack approach here
  // We need to sort an arrays and reverse it, start from the car nearest to the target

  const carsPosition = new Map();

  for (let i = 0; i < position.length; i++) {
    carsPosition.set(position[i], speed[i]);
  }

  const sortedCarPositions = Array.from(carsPosition.entries())
    .sort((a, b) => b[0] - a[0]);

  // Stack length will be our answer
  const stack = [];

  for (let i = 0; i < sortedCarPositions.length; i++) {
    const [position, speed] = sortedCarPositions[i];
    const time = (target - position) / speed;
    stack.push(time);

    // if car is running faster => it will collide with slower car, and it will be fleet
    // We don't have to store faster car because it's speed will be the same as slower
    // because they were fleet
    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }

  return stack.length;
};

// 3
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

// 1
console.log(carFleet(10, [3], [3]));

// 1
console.log(carFleet(100, [0,2,4], [4,2,1]));
