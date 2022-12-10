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

module.exports = { getSizes }
