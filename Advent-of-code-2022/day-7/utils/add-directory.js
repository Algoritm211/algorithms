const addDirectory = (currentDir, newDir) => {
  if (!currentDir[newDir]) {
    currentDir[newDir] = {};
  }

  return currentDir[newDir];
};

module.exports = { addDirectory }
