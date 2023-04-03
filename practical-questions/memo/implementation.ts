type Params<T> = T extends ((...args: infer P) => unknown) ? P : never[]
const memo = <T extends (...args: any) => any, R>(fn: T) => {
  const cache = new Map();

  const _cache = (...args: Params<T>): ReturnType<T> => {
    const stringArgs = JSON.stringify(args);
    if (cache.has(stringArgs)) {
      console.log('We have it in cache')
      return cache.get(stringArgs)
    }

    console.log('We must compute it...')
    const result = fn.apply(null, args);

    cache.set(stringArgs, result);
    return result;
  }

  return _cache;
}


const sum = (a: number, b: number) => {
  return a + b;
}

const concatenation = (a: string, b: string): `${string}-${string}` => {
  return `${a}-${b}`
}

const memoSum = memo(sum);
const memoConcatenation = memo(concatenation);

console.log(memoSum(3, 5));
console.log(memoSum(3, 5));
console.log(memoSum(7, 10));

console.log(memoConcatenation('some', 'value'))
console.log(memoConcatenation('Rolls', 'Royce'))
console.log(memoConcatenation('Alfa', 'Romeo'))
console.log(memoConcatenation('Rolls', 'Royce'))
