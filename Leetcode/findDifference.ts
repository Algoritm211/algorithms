const collectLettersToObj = (strArr: string[]) => {
  const obj: Record<string, number> = {};
  for (const i in strArr) {
    if (!obj[strArr[i]]) {
      obj[strArr[i]] = 1;
      continue;
    }
    obj[strArr[i]] += 1;
  }
  return obj;
}

const findTheDifference = (s: string, t: string) => {
  if (!s || !t) {
    return s || t
  }
  const firstString = s.split('');
  const secondString = t.split('');

  const firstObj = collectLettersToObj(firstString);
  const secondObj = collectLettersToObj(secondString);

  const biggestObject = Object.keys(firstObj) > Object.keys(secondObj)
    ? firstObj
    : secondObj;

  for (const key in firstObj) {
    if (firstObj[key] === secondObj[key]) {
      delete biggestObject[key]
    }
  }
  return Object.keys(biggestObject)[0]
}


console.log(findTheDifference('a', 'aa'))
console.log(findTheDifference('abcd', 'abcde'))
console.log(findTheDifference('ae', 'aea'))
