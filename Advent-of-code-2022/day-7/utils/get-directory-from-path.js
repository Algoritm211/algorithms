const getDirectoryFromPath = (fileSystem, pathSegments) => {
  let dir = fileSystem["/"];
  for (const segment of pathSegments) {
    dir = dir[segment];
  }

  return dir;
};

module.exports = { getDirectoryFromPath }
