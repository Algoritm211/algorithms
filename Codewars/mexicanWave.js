
// link - https://www.codewars.com/kata/58f5c63f1e26ecda7e000029


function wave(str){
  const result = [];

  const splitByWord = Array.from(str);

  for (let i = 0; i < splitByWord.length; i++) {
    if (splitByWord[i] === ' ') {
      continue;
    }
    const firstWordPart = splitByWord.slice(0, i)
    const lastWordPart = splitByWord.slice(i + 1);
    const middleLetter = splitByWord[i].toUpperCase();

    const newWord = `${firstWordPart.join('')}${middleLetter}${lastWordPart.join('')}`
    result.push(newWord);
  }

  return result;
}

console.log(wave('Two words'));

