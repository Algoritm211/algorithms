// Function for demonstrating changes
// (suppose we want to fetch something on input change and want throttle this function)
const getUserData = (event: KeyboardEvent) => {
  const { value } = event.target as unknown as { value: string };
  console.log('Fetching user by name...', value)
}

// Throttled function
const throttled = <T, R>(
  func: (...args: T[]) => R,
  timeToThrottle: number
) => {
  let isThrottling = false;
  let timer: NodeJS.Timer;

  return (...args: T[]) => {
    if (isThrottling) {
      return;
    }
    clearTimeout(timer);
    func(...args);
    isThrottling = true;
    timer = setTimeout(() => {
      isThrottling = false
    }, timeToThrottle)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('throttled-input')!;

  const throttledGetUserData = throttled(getUserData, 500)
  input.addEventListener('keypress', throttledGetUserData)
})
