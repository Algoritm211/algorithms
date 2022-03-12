const differentiate = (func) => {
  if (!isNaN(+func)) {
    return 0;
  }
  if (func === 'x') {
    return 1;
  }

  let [expression, degree] = func.split('^');

  // Coefficient always before x
  let [coefficient] = expression.split('x')

  if (coefficient === '-') {
    coefficient = -1;
  }

  if (!degree) {
    return +coefficient
  }

  if (!coefficient) {
    coefficient = 1;
  }

  const resultExpression = +coefficient * +degree;
  degree -= 1;

  if (resultExpression === 1) {
    return `x^${degree}`
  } else if (resultExpression === -1) {
    return `-x^${degree}`
  }

  if (degree === 1) {
    return `${resultExpression}x`
  }

  return `${resultExpression}x^${degree}`
}

console.log(differentiate('x^-1'));


