function toCamelCase(str) {
  let parsedStr;

  if (str.includes('-')) {
    parsedStr = str.split('-')
  } else if (str.includes('_')) {
    parsedStr = str.split('_')
  } else {
    return str;
  }

  const result = parsedStr.map((string, index) => {
    if (index === 0) {
      return string;
    }

    return `${string[0].toUpperCase()}${string.slice(1)}`
  })

  return result.join('');
}

console.log(toCamelCase('the_stealth_warrior'));
