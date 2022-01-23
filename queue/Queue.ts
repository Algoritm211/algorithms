import { LinkedList } from "../linkedList/LinkedList";


export class Queue {
  private linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head
  }

  enqueue(value: string) {
    this.linkedList.append(value);
    return this;
  }

  dequeue() {
    return this.linkedList.deleteHead();
  }

  // Read the element at the front of the queue without removing it.
  peek() {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  toArray() {
    return this.linkedList.toArray();
  }

  toString() {
    return this.linkedList.toString();
  }

}
