
// A function that looks for the largest number in length
export const getLargestNumber = (arr: Array<number>) => {
  let largest = '0';

  arr.forEach((number) => {
    let strNum = String(number);

    if (strNum.length > largest.length) {
      largest = strNum;
    }
  });

  return largest.length;
}


// function for getting digit in number
export const getDigitNum = (num: number, digit: number): number => {
  const strNum = String(num);
  const endNum = strNum.length - 1;
  if (+strNum[endNum - digit]) {
    return +strNum[endNum - digit]
  }

  return 0;
};
