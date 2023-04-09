type FuncParams<T> = T extends (...args: infer R) => any ? R : never[];

const promisify = <T extends (...args: any[]) => any>(func: T) => {
  return (...args: FuncParams<T>): Promise<ReturnType<T>> => {
    return new Promise((resolve, reject) => {
      const callback = (error: Error, result: ReturnType<T>) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      }
      func.apply(null, args.concat(callback))
    })
  }
}

const asyncSum = <T extends Function>(a?: number, b?: number, cb?: T): number | undefined => {
  if (!cb) {
    return;
  }
  if (a === undefined || b === undefined) {
    return cb(new Error('Missing required params'));
  }

  return cb(null, a + b)
}

const promisified = promisify(asyncSum);

promisified(1, 2)
  .then(data => console.log('Result of sum', data))
  .catch(err => console.log('Error occurred', err))

