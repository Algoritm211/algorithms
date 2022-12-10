const {lines} = require('./read-input');
const {getFilesystemTree} = require('./utils/get-filesystem-tree');


const secondPartOfSolution = (lines) => {
  const fileSystem = getFilesystemTree(lines);

  const getSizes = (directory, sizes) => {
    let size = 0;
    for (const [key, value] of Object.entries(directory)) {
      if (Number.isInteger(value)) {
        size += value;
      } else {
        size += getSizes(directory[key], sizes);
      }
    }

    sizes.push(size);
    return size;
  };

  const sizes = [];
  const total = getSizes(fileSystem['/'], sizes);
  const unused = 70000000 - total;
  const minDirSize = 30000000 - unused;

  const answer = Math.min(...sizes.filter((s) => s > minDirSize));
  return answer;
}


console.log(secondPartOfSolution(lines));
