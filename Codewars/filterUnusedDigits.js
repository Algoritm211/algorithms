function unusedDigits(){
  const args = Array.from(arguments).map(String);

  let allDigits = Array.from('0123456789');

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < String(args[i].length); j++) {
      allDigits = allDigits.filter((num) => num !== args[i][j]);
    }
  }
  return allDigits.join('');
}

console.log(unusedDigits(2015, 8, 26));
