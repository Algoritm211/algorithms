import {getDigitNum, getLargestNumber} from "./utils";


describe('Test utils functions for Radix sort', () => {
  it('getLargestNumber works good', () => {
    const array = [1, 5, 55, 777, 12, 14];
    const largestNumLength = getLargestNumber(array);
    expect(largestNumLength).toBe(3);
  });

  it('getDigitNum function works good', () => {
    const num = 789;

    expect(getDigitNum(num, 0)).toBe(9)
    expect(getDigitNum(num, 1)).toBe(8)
    expect(getDigitNum(num, 2)).toBe(7)
  });
})
