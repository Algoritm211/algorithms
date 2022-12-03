const { elfs } = require('./read-input');

const solutionOfFirstPart = (elfs) => {
  const calories = elfs.map((elf) => {
    const caloriesByElf = elf.split('\n').map((elem) => Number(elem));
    return caloriesByElf.reduce((prev, current) => prev + current, 0);
  });

  return Math.max(...calories)
}

console.log(solutionOfFirstPart(elfs));
