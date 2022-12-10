const {lines} = require('./read-input');
const {addDirectory} = require('./utils/add-directory');
const {getDirectoryFromPath} = require('./utils/get-directory-from-path');
const {getFilesystemTree} = require('./utils/get-filesystem-tree');


const firstPartOfSolution = (lines) => {
  const fileSystem = getFilesystemTree(lines)

  let answer = 0;

  const getSumOfDirectories = (directory) => {
    let size = 0;
    for (const [key, value] of Object.entries(directory)) {
      if (Number.isInteger(value)) {
        size += value;
      } else {
        size += getSumOfDirectories(directory[key]);
      }
    }

    if (size < 100000) {
      answer += size;
    }

    return size;
  };

  getSumOfDirectories(fileSystem['/']);

  return answer;
};


console.log(firstPartOfSolution(lines));
