// Time - 76ms, Memory - 45.4MB, O(log(max(piles)) * piles.length) time, O(1) memory
/**
 * @param {number[]} piles
 * @param {number} hoursGuardsWillBeAbsent
 * @return {number}
 */
const minEatingSpeed = (piles, hoursGuardsWillBeAbsent) => {
  // We have to use binary search approach here
  // 1. We need to create an array from 1 (min speed) to max (max pile in array)
  // 2. We need to check using binary search if the middle number will be suitable
  // for eating bananas before guards will be back
  // 3. If the number of hours will be bigger than time in which guards will be absent
  // - we have to increase speed (move left pointer to bigger numbers)
  // if we will have an opposite situation - we must move right pointer to lower numbers
  // 4. When cycle will end (left pointer >= right pointer)
  // - in result we will have more suitable number

  const maxSpeed = Math.max(...piles);

  /**
   * @param {number} speed
   */
  const timeForEatingAllPiles = (speed) => {
    let time = 0;
    for (let i = 0; i < piles.length; i++) {
      const timeForPile = Math.ceil(piles[i] / speed);
      time += timeForPile;
    }
    return time;
  };

  let optimalSpeed = Infinity;
  // binary search
  let leftPointer = 0;
  let rightPointer = maxSpeed;
  while (leftPointer <= rightPointer) {
    const middlePointer = Math.round((rightPointer - leftPointer) / 2) + leftPointer;
    const speedToCheck = middlePointer + 1
    const timeForEatingPiles = timeForEatingAllPiles(speedToCheck);

    if (timeForEatingPiles > hoursGuardsWillBeAbsent) {
      leftPointer = middlePointer + 1;
    } else if (timeForEatingPiles <= hoursGuardsWillBeAbsent) {
      optimalSpeed = Math.min(optimalSpeed, speedToCheck);
      rightPointer = middlePointer - 1;
    }
  }

  return optimalSpeed;
};

// 4
console.log(minEatingSpeed([3, 6, 7, 11], 8));

// 30
console.log(minEatingSpeed([30,11,23,4,20], 5));

// 23
console.log(minEatingSpeed([30,11,23,4,20], 6));
