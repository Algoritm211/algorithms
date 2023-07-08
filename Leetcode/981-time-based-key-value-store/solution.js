// Time - 358ms, Memory - 97.7MB, O(log(n)) time, O(n) space (map - additional space)
class TimeMap {

  #timeMap = new Map();

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (!this.#timeMap.has(key)) {
      this.#timeMap.set(key, []);
    }

    this.#timeMap.get(key).push({value, timestamp});
  };

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const arrayOfKeys = this.#timeMap.get(key);

    let result = '';

    if (!arrayOfKeys) {
      return result;
    }

    let leftPointer = 0;
    let rightPointer = arrayOfKeys.length - 1;

    if (timestamp > arrayOfKeys.at(-1).timestamp) {
      return arrayOfKeys.at(-1).value;
    }

    while (rightPointer >= leftPointer) {
      const middlePointer = Math.round((rightPointer - leftPointer) / 2) + leftPointer;

      const {timestamp: currentTimestamp, value} = arrayOfKeys.at(middlePointer);

      if (currentTimestamp <= timestamp) {
        result = value;
        leftPointer = middlePointer + 1;
      } else {
        rightPointer = middlePointer - 1;
      }
    }

    return result;
  };
}

const timeMap = new TimeMap();
timeMap.set('foo', 'bar', 1);

// bar
console.log(timeMap.get('foo', 1));

// bar
console.log(timeMap.get('foo', 3));
timeMap.set('foo', 'bar2', 4);

// bar2
console.log(timeMap.get('foo', 4));

// bar2
console.log(timeMap.get('foo', 5));
