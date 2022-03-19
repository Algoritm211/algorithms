const sum = (...args) => {
  const result = args.reduce((acc, num) => acc + num, 0);
  return result;
}


console.log(sum(12, 1, 1, 1, 1, 1, 1)); // 18
