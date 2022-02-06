function isTriangleNumber(number) {
  if (typeof number === 'string') {
    return false;
  } else if (!Number.isInteger(number)) {
    return false
  }

  // If triangle - integer, if not - float
  const triangleNum = (Math.sqrt(number * 8 + 1) - 1) / 2

  return Number.isInteger(triangleNum);
}

console.log(isTriangleNumber(8));
