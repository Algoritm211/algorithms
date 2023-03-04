// Time - 73ms, Memory - 43.5MB
const MapSum = function () {
  this.storage = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.storage.set(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let result = 0;
  for (const [key, value] of this.storage) {
    if(key.match(new RegExp(prefix, 'y'))) {
      result += value;
    }
  }

  console.log(result);
  return result;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const mapSum = new MapSum();
mapSum.insert('aab', 33);
mapSum.sum('aab');           // return 3 (apple = 3)
mapSum.sum('ab');           // return 5 (apple + app = 3 + 2 = 5)
