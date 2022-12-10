const {line} = require('./read-input')

const firstPartOfSolution = (line) => {
  const windowSize = 4;
  for (let i = 0; i < line.length; i++) {
    const substr = line.slice(i, i + windowSize);

    if (new Set(substr).size === windowSize) {
      return i + windowSize;
    }
  }

  return null;
}

console.log(firstPartOfSolution(line));
