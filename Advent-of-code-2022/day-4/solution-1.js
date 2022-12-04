const { lines: rawLines } = require('./read-input');



const firstPartOfSolution = (rawLines) => {
  const lines = rawLines.map((elem) =>
    // split by elf
    elem.split(',')
      // split by start-end
      .map(elem => elem.split('-').map(Number))
  );

  let result = 0;

  for (const [ [fromFirst, toFirst], [fromSecond, toSecond] ] of lines) {
    const firstElfCoverSecond = fromFirst <= fromSecond && toFirst >= toSecond;
    const secondElfCoverFirst = fromSecond <= fromFirst && toSecond >= toFirst;

    if (firstElfCoverSecond || secondElfCoverFirst) {
      result += 1;
    }
  }

  return result;
}


console.log(firstPartOfSolution(rawLines));
