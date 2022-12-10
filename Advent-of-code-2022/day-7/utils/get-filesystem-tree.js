const {getDirectoryFromPath} = require('./get-directory-from-path');
const {addDirectory} = require('./add-directory');


const getFilesystemTree = (lines) => {
  const commandRegex = /\$ (?<command>cd|ls) ?(?<argument>(\w+|\/|\.\.)+)?/;
  const fileSystem = {'/': {}};
  let currentDir = fileSystem['/'];
  let pathSegments = [];

  for (const line of lines) {
    const commandMatch = line.match(commandRegex);
    if (commandMatch) {
      if (commandMatch.groups['command'] === 'cd') {
        if (commandMatch.groups['argument'] === '/') {
          pathSegments = [];
          currentDir = fileSystem['/'];
        } else if (commandMatch.groups['argument'] === '..') {
          pathSegments.pop();
          currentDir = getDirectoryFromPath(fileSystem, pathSegments);
        } else {
          pathSegments.push(commandMatch.groups['argument']);
          currentDir = addDirectory(currentDir, commandMatch.groups['argument']);
        }
      }
    } else {

      const [first, second] = line.split(' ');
      if (first === 'dir') {
        addDirectory(currentDir, second);
      } else {
        currentDir[second] = Number(first);
      }
    }
  }

  return fileSystem;
}

module.exports = { getFilesystemTree }
