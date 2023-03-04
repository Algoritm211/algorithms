import {binarySearch} from "./binarySearch";

describe('Works of binarySearch function', () => {
  it('BinarySearch can right search index of number which we want to search', () => {
    const testNums = [-2, -1, 3, 4, 5, 7, 9, 12, 15];
    expect(binarySearch(testNums, 7)).toBe(5);
    expect(binarySearch(testNums, 12)).toBe(7);
  });

  it('If no matches with number - binarySearch function returns -1', () => {
    const testNums = [-1, 0, 2];
    expect(binarySearch(testNums, 7)).toBe(-1);
    expect(binarySearch(testNums, 12)).toBe(-1);
  });
});
