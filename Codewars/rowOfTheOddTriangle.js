const oddRow = (rowNum) => {
  let firstNumberOfRow = rowNum * (rowNum - 1) + 1;
  const result = [];

  for (let i = 0; i < rowNum; i++) {
    result.push(firstNumberOfRow);
    firstNumberOfRow += 2
  }

  return result;
}

console.log(oddRow(19));

