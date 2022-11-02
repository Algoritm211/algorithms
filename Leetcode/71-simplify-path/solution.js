// Time - 105ms, Memory - 44.3MB
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const splittedPath = path.split('/').filter(val => val !== '')

  const resultArr = []

  for (let i = 0; i < splittedPath.length; i++) {

    if (splittedPath[i] === '..'){
      resultArr.pop()
    }

    if (splittedPath[i] !== '..' && splittedPath[i] !== '.') {
      resultArr.push(`${splittedPath[i]}/`)
    }
  }
  let result = resultArr.join('')

  if (resultArr.length < 1) {
    return `/${result}`.replaceAll('//', '/');
  }

  while (result.at(-1) === '/') {
    result = result.slice(0, -1)
  }

  return `/${result}`.replaceAll('//', '/')
};

// "/e/f/g"
console.log(simplifyPath('/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///'));

// "/"
console.log(simplifyPath("/.."));

// "/home"
console.log(simplifyPath('/home/'));

// "/"
console.log(simplifyPath('/../'));

// "/home/foo"
console.log(simplifyPath('/home//foo/'));

// "/c"
console.log(simplifyPath('/a/./b/../../c/'));

// "/c"
console.log(simplifyPath('/a/../../b/../c//.//'));

// "/a/b/c"
console.log(simplifyPath('/a//b////c/d//././/..'));
