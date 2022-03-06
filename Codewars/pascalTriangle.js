const pascalTriangle = (number) => {
  const result = [];
  // [1]
  // [1, 1]
  // [1, 2, 1]
  // [1, 3, 3, 1]

  for (let i = 0; i < number; i++) {
    const row = [1]

    for (let j = 1; j < i; j++) {
      row.push(result[i - 1][j - 1] + result[i - 1][j])
    }

    if (i > 0) {
      row.push(1);
    }

    result.push(row)
  }

  return result;
};

console.log(pascalTriangle(6));
