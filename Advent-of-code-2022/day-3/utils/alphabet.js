const lowercase = Array.from(Array(26)).map((e, i) => i + 97).map(x => String.fromCharCode(x));
const uppercase = Array.from(Array(26)).map((e, i) => i + 65).map(x => String.fromCharCode(x));
const alphabet = lowercase.concat(uppercase);

module.exports = {alphabet}
