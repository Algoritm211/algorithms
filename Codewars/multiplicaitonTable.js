function multiplicationTable(size) {
  let resultArr = [];

  for (let i = 1; i <= size; i++) {
    const tempArr = []
    for (let j = 0; j < size; j++) {
      tempArr.push(i + j * i);
    }
    resultArr.push(tempArr);
  }
  return resultArr;
}


console.log(multiplicationTable(3));
