// Time - 75ms, Memory - 46.1MB
/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */
const isIsomorphic = (firstString, secondString) => {
  if (new Set(firstString).size !== new Set(secondString).size) {
    return false
  }

  const tempObj = {};

  for (let i = 0; i < firstString.length; i++) {
    const letterFromFirst = firstString[i];
    const letterFromSecond = secondString[i];

    if (tempObj.hasOwnProperty(letterFromFirst) && (tempObj[letterFromFirst] !== letterFromSecond)) {
      return false
    }

    tempObj[letterFromFirst] = letterFromSecond;
  }

  return true;
};

// false
console.log(isIsomorphic('badc', 'baba'));

// true
console.log(isIsomorphic('egg', 'add'));

// false
console.log(isIsomorphic('foo', 'bar'));

// true
console.log(isIsomorphic('paper', 'title'));
