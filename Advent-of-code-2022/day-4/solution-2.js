const { lines: rawLines } = require('./read-input');


const secondPartOfSolution = (rawLines) => {
  const lines = rawLines.map((elem) =>
    // split by elf
    elem.split(',')
      // split by start-end
      .map(elem => elem.split('-').map(Number))
  );

  let result = 0;

  for (const [ [fromFirst, toFirst], [fromSecond, toSecond] ] of lines) {
    const isCoverSomething = fromFirst <= toSecond && fromSecond <= toFirst;

    if (isCoverSomething) {
      result += 1;
    }
  }

  return result;
}


console.log(secondPartOfSolution(rawLines));
