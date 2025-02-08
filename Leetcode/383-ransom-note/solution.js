// Time - 8ms, Memory - 52.84MB
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const ransomNoteMap = new Map();

  for (let letter of ransomNote) {
    if (ransomNoteMap.has(letter)) {
      ransomNoteMap.set(letter, ransomNoteMap.get(letter) + 1);
    } else {
      ransomNoteMap.set(letter, 1)
    }
  }

  for (let elementIndex = 0; elementIndex < magazine.length; elementIndex++) {    
    if (ransomNoteMap.size === 0) {
      return true;
    }

    const element = magazine[elementIndex];

    if (!ransomNoteMap.has(element) || ransomNoteMap.get(element) < 1) {
      continue;
    }

    if (ransomNoteMap.has(element)) {
      if (ransomNoteMap.get(element) === 1) {
        ransomNoteMap.delete(element);
      } else (
        ransomNoteMap.set(element, ransomNoteMap.get(element) - 1)
      )
    }
  }

  return ransomNoteMap.size === 0;
};

// false
console.log(canConstruct('a', 'b'));

// false
console.log(canConstruct('aa', 'ab'));

// true
console.log(canConstruct('aa', 'aab'));

// true
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj'));


