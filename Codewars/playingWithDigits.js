function digPow(num, pow){
  const strNum = num.toString();

  let sum = 0;

  Array.from(strNum).forEach((digit) => {
    sum += Math.pow(+digit, pow)
    pow += 1
  })

  if (sum % num === 0) {
    return sum / num
  }

  return -1;
}

console.log(digPow(46288, 3));

