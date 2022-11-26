// Time - 108ms, Memory - 42.3MB
const numLettersMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return numLettersMap[digits];
  }

  const separatedDigits = digits.split('');

  const lettersArrays = separatedDigits.map((digit) => numLettersMap[digit]);

  let result = [];


  for (let i = 0; i < lettersArrays.length - 1; i++) {
    const currArr = lettersArrays[i];
    const nextArr = lettersArrays[i + 1];

    if (i === 0) {
      result = currArr.flatMap((elem) => nextArr.map(((nextElem) => `${elem}${nextElem}`)))
    } else {
      result = result.flatMap((elem) => nextArr.map(((nextElem) => `${elem}${nextElem}`)))
    }
  }
  return result;
};

// ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
console.log(letterCombinations('234'));

// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('23'));

// []
console.log(letterCombinations(''));

// ["a","b","c"]
console.log(letterCombinations('2'));
