const findDisappearedNumbers = (nums: number[]) => {
  nums.sort()
  const resObj: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    if (!resObj[i + 1]) {
      resObj[i + 1] = 0
    }
    if (resObj[nums[i]]) {
      resObj[nums[i]] += 1;
    }
    resObj[nums[i]] = 1;
  }

  const result: number[] = [];
  Object.entries(resObj).forEach(([key, entry]) => {
    if (entry === 0) {
      result.push(+key)
    }
  })
  return result;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))
console.log(findDisappearedNumbers([2,2]))
console.log(findDisappearedNumbers([10,2,5,10,9,1,1,4,3,7]))
