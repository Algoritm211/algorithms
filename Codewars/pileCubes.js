function findNb(num) {
  let startNumber = 0;

  while (num > 0) {
    num -= Math.pow(startNumber, 3)
    startNumber += 1
  }

  if (num === 0) {
    return startNumber - 1;
  }

  return -1;
}


console.log(findNb(135440716410000));
