import { HashTable } from './HashTable';

describe('HashTable', () => {
  it('Should create hash table of certain size', () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.bucket.length).toBe(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.bucket.length).toBe(64);
  });

  it('Should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('abc')).toBe(6);
  });

  it('Should set, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);

    expect(hashTable.hash('a')).toBe(1);
    expect(hashTable.hash('b')).toBe(2);
    expect(hashTable.hash('c')).toBe(0);
    expect(hashTable.hash('d')).toBe(1);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('x')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('c')).toBe(true);

    expect(hashTable.get('a')).toBe('sky');
    expect(hashTable.get('d')).toBe('ocean');
    expect(hashTable.get('x')).not.toBeDefined();

    hashTable.delete('a');

    expect(hashTable.delete('not-existing')).toBeNull();

    expect(hashTable.get('a')).not.toBeDefined();
    expect(hashTable.get('d')).toBe('ocean');

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d')).toBe('ocean-new');
  });

  it('Should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).toBe(true);
    expect(hashTable.has('x')).toBe(false);

    hashTable.delete('a');

    expect(hashTable.has('a')).toBe(false);
    expect(hashTable.has('b')).toBe(true);
    expect(hashTable.has('x')).toBe(false);
  });

  it('Should get all the values', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'alpha');
    hashTable.set('b', 'beta');
    hashTable.set('c', 'gamma');

    expect(hashTable.getValues()).toEqual(['alpha', 'beta', 'gamma']);
  });

  it('Should get all the values from empty hash table', () => {
    const hashTable = new HashTable();
    expect(hashTable.getValues()).toEqual([]);
  });

  it('Should get all the values in case of hash collision', () => {
    const hashTable = new HashTable(3);

    // Keys `ab` and `ba` in current implementation should result in one hash (one bucket).
    // We need to make sure that several items from one bucket will be serialized.
    hashTable.set('ab', 'one');
    hashTable.set('ba', 'two');

    hashTable.set('ac', 'three');

    expect(hashTable.getValues()).toEqual(['one', 'two', 'three']);
  });
});
