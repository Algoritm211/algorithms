function likes(namesArr) {
  let phrase = 'like this';

  if (namesArr.length < 2) {
    phrase = 'likes this';
  }

  if (namesArr.length === 0) {
    return `no one ${phrase}`
  }

  if (namesArr.length === 1) {
    return `${namesArr[0]} ${phrase}`
  }

  if (namesArr.length === 2) {
    return `${namesArr[0]} and ${namesArr[1]} ${phrase}`
  }

  if (namesArr.length === 3) {
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} ${phrase}`
  }

  return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} others ${phrase}`
}


console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
