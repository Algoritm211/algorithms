const revrot = (str, sz) => {
  if (sz <= 0 || str === '' || sz > str.length) {
    return ''
  }

  const patternForDivide = new RegExp(`.{1,${sz}}`, "ig");

  let dividedArr = str.match(patternForDivide).filter(item => item.length === sz);

  const resultArr = dividedArr.map((num) => {
    const sumAllSquares = num.split('')
      .reduce((acc, elem) => acc + Math.pow(+elem, 2), 0)

    if (sumAllSquares % 2 === 0) {
      return num.split('').reverse().join('')
    }
    const firstDigit = num.split('').shift();
    return [...num.split('').slice(1, num.split('').length), firstDigit].join('')
  })

  return resultArr.join('');
}

console.log(revrot("733049910872815764", 5));
