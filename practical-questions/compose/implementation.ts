const compose = <FUNC extends Function>(...funcs: FUNC[]) => {
  return <ARGS>(...args: ARGS[]) => {
    return funcs.reduceRight(
      (args, nextFunc) => nextFunc(args), args[0]
    )
  }
}


const double = (a: number) => a * 2;

const square = (a: number) => Math.pow(a, 2);

const testOutput = compose(square, double)(2);

// 2 * 2 => 4^2 = 16
console.log(testOutput)
