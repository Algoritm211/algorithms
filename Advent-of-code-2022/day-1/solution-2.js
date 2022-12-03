const { elfs } = require('./read-input');


const secondPartOfSolution = (elfs) => {
  const calories = elfs.map((elf) => {
    const caloriesByElf = elf.split('\n').map(Number);
    return caloriesByElf.reduce((prev, curr) => prev + curr, 0);
  }).sort((a, b) => b - a);

  const result = calories.slice(0, 3).reduce((prev, curr) => prev + curr, 0)
  return result;
}


console.log(secondPartOfSolution(elfs));
