
// Function for demonstrating changes
// (suppose we want to fetch something on input change)
const getData = (event: KeyboardEvent) => {
  const { value } = event.target as unknown as { value: string };
  console.log('Fetching data...', value)
}

// Debounced function
const debounced = <T, R>(
  func: (...args: T[]) => R,
  msDelay: number
) => {
  let timer: NodeJS.Timer;

  return (...args: T[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(...args)
    }, msDelay)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('debounced-input')!;

  const debouncedData = debounced(getData, 500);
  input.addEventListener('keyup', debouncedData)
})
