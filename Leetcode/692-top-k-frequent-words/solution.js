// Time - 81ms, Memory - 47.6MB
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const frequencyObj = {};

  for (let i = 0; i < words.length; i++) {
    if (Object.hasOwn(frequencyObj, words[i])) {
      frequencyObj[words[i]] += 1;
    } else {
      frequencyObj[words[i]] = 1;
    }
  }

  const resultEntries = Object.entries(frequencyObj)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
    .slice(0, k);

  return resultEntries.map(elem => elem[0]);
};

// ["i","love","coding"]
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));

// ["i","love"]
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));

// ["the","is","sunny","day"]
console.log(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4));
