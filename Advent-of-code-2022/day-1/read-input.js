const fs = require('fs');
const path = require('path');

const elfs = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove start/end whitespace
  .split('\n\n'); // Split on newline

module.exports = { elfs }
