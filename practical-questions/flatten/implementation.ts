type ExtractInsideValue<T> = T extends ReadonlyArray<infer U>
  ? ExtractInsideValue<U>
  : T

const flatten = <T extends ReadonlyArray<any>>(arr: T): Array<ExtractInsideValue<T>> => {
 let resultArr: Array<ExtractInsideValue<T>> = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      resultArr = resultArr.concat(flatten(elem));
      continue;
    }
    resultArr.push(elem)
  }
  return resultArr;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatten([1, 2, [3, 4, [5, [6]], 7, 8], 9]))
