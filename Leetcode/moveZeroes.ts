const moveZeroes = (nums: number[]) => {
  const copyWithoutZeros = nums.filter((num) => num !== 0)
  const numberOfZeros = nums.length - copyWithoutZeros.length;
  const resultArr = copyWithoutZeros.concat(new Array(numberOfZeros).fill(0));
  // clean array
  nums.splice(0, nums.length)
  for (const number of resultArr) {
    nums.push(number)
  }
  return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
