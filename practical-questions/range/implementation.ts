function* range(start: number, end: number, step = 1){
  if (start > end) {
    return;
  }
  while (start <= end) {
    yield start;
    start += step
  }
}

// tests
console.log([...range(0, 3)])
console.log([...range(0, 20, 5)])

for (const number of range(0, 100, 20)) {
  console.log(number)
}
