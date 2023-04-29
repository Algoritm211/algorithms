// Time - 118ms, Memory - 42.9MB
class MinStack {

  #minArr = [];
  #stack = [];

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.#minArr.length === 0 || val <= this.#minArr.at(-1)) {
      this.#minArr.push(val)
    }
    this.#stack.unshift(val)
  }

  /**
   * @return {void}
   */
  pop() {
    const elem = this.#stack.shift();
    if (elem === this.#minArr.at(-1)) {
      this.#minArr.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.#stack.at(0);
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.#minArr.at(-1);
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
