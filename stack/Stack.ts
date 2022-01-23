import { LinkedList } from "../linkedList/LinkedList";

export class Stack {
  private linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  push(value: string) {
    this.linkedList.prepend(value);
    return this;
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  // Just read the value from the start of linked list without deleting it.
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
