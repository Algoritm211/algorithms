const compose = (...args) => {
  const functions = [...args.slice(0, args.length - 1)];
  return function () {
    const funcArgs = Array.from(arguments);
    const result = functions.reduceRight((acc, currentFunc) => {
      return currentFunc(acc)
    }, args[args.length - 1](...funcArgs))

    return result;
  }
}

// const add1 = function(a){return a + 1}
// const id = function(a){return a}
//
// console.log(compose(add1, id)(0));

const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

console.log(compose(add1,addAll3)(1,2,3));
