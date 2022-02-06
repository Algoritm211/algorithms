function order(words) {
  if (words === '') {
    return ''
  }
  const wordsArr = words.split(' ');
  const orders = {};
  wordsArr.forEach((word) => {
    const order = word.match(/\d+/g)[0];
    orders[order] = word;
  })

  const result = Object.entries(orders).sort((a, b) => {
    return +a[0] - b[0];
  }).map(arr => arr[1]).join(' ')

  return result;
}

console.log(order('is2 Thi1s T4est 3a'));
