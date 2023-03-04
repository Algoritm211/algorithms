import { LinkedList } from '../linkedList/LinkedList';


const DEFAULT_TABLE_SIZE = 32;

export class HashTable {
  public bucket: Array<LinkedList>;
  private keys: { [key: string]: { hash: string | number, value: string } };

  constructor(hashTableSize: number = DEFAULT_TABLE_SIZE) {
    this.bucket = Array(hashTableSize).fill(null).map(() => new LinkedList());

    this.keys = {};
  }

  hash(key: string) {

    const hash = Array.from(key).reduce((acc, keySymbol) => {
      return acc + keySymbol.charCodeAt(0);
    }, 0)

    return hash % this.bucket.length;
  }

  set(key: string, value: string) {
    const hash = this.hash(key);
    this.keys[key] = { hash, value };
    const bucketLinkedList = this.bucket[hash];
    const node = bucketLinkedList.find(value);

    if (!node) {
      bucketLinkedList.append(value);
    } else {
      node.value = value;
    }

    return this;
  }

  get(key: string) {
    const hash = this.hash(key);
    const bucketLinkedList = this.bucket[hash];

    const value = this.keys[key]?.value;
    return bucketLinkedList.find(value)?.value;
  }

  delete(key: string) {
    const hash = this.hash(key);
    const bucketLinkedList = this.bucket[hash];

    const valueToFindInBucketLinkedList = this.keys[key]?.value;
    if (!valueToFindInBucketLinkedList) {
      return null;
    }
    const nodeToDelete = bucketLinkedList.find(valueToFindInBucketLinkedList);
    bucketLinkedList.delete(nodeToDelete?.value!);

    delete this.keys[key];

    return nodeToDelete?.value;
  }

  has(key: string) {
    return Object.keys(this.keys).includes(key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  getValues() {
    return Object.values(this.keys).map((item) => {
      return item.value;
    });
  }

}

// const hashTable = new HashTable();
//
// // hashTable.set('a', '4')
// hashTable.set('a1', 'asd')
// hashTable.set('1a', 'asasdasdad')
//
// console.log(hashTable.get('1a'))
//
// console.log(hashTable.delete('1a'));
//
// console.log(hashTable.get('1a'))

// console.log(hashTable.bucket[18]);
