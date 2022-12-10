// Time - 90ms, Memory - 42MB
/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  const result = address.replaceAll(/\./g, '[.]');
  return result;
};

// "1[.]1[.]1[.]1"
console.log(defangIPaddr('1.1.1.1'));

// "255[.]100[.]50[.]0"
console.log(defangIPaddr('255.100.50.0'));
