function findUniq(arr) {
  const results = {}

  for (const number of arr) {
    if (results[number]) {
      results[number] += 1
    } else {
      results[number] = 1
    }
  }

  for (const [key, value] of Object.entries(results)) {
    if (value === 1) {
      return +key;
    }
  }

  return -1;
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
