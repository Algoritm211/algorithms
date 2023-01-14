// Time - 35ms, Memory - 53.3MB
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const anagramSortObj = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedSymbolsKey = strs[i]
      .split('').map((elem) => elem.charCodeAt(0))
      .sort().join('')

    if (anagramSortObj.hasOwnProperty(sortedSymbolsKey)) {
      anagramSortObj[sortedSymbolsKey].push(strs[i])
    } else {
      anagramSortObj[sortedSymbolsKey] = [strs[i]]
    }
  }

  return Object.values(anagramSortObj)
};

// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// [[""]]
console.log(groupAnagrams(['']));

// [["a"]]
console.log(groupAnagrams(['a']));
