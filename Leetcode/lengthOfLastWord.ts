
const lengthOfLastWord = (rawStr: string) => {
  const input = rawStr.trim();
  return input.split(' ').at(-1)?.length || -1
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
