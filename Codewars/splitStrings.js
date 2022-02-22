function solution(str){
  const strArr = str.split('');
  const result = [];

  let index = 0;

  while (strArr.length > index) {
    const elem = strArr.slice(index, index + 2)
    if (elem.length === 1) {
      elem.push('_')
    }
    result.push(elem.join(''))
    index += 2;
  }

  return result;
}


console.log(solution('abcdefg'));
