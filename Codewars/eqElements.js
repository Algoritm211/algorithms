// Link: https://www.codewars.com/kata/5963caa2cb97be79630000c0

Object.defineProperty(Array.prototype, 'eqAll', {
  value: function eqAll() {
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== this[i + 1]) {
        return false;
      }
    }
    return true;
  },
});


Object.defineProperty(String.prototype, 'eqAll', {
  value: function eqAll() {
    const strArr = Array.from(this);
    return strArr.eqAll();
  },
});
