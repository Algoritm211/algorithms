class LinkedListNode {

  public value: string;
  public next: LinkedListNode | null;

  constructor(value: string, next: LinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

export class LinkedList {

  public head: LinkedListNode | null
  public tail: LinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  append(value: string) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode

    return this;
  }

  prepend(value: string) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(valueToFind: string) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === valueToFind) {
        return currentNode
      }

      if (currentNode.next === null) {
        return null;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  delete(valueToDelete: string) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // If we want delete multiply elements from list
    while (this.head && this.head.value === valueToDelete) {
      deletedNode = this.head.value;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next?.value === valueToDelete) {
        deletedNode = currentNode.next.value;
        // If deleted node - next node, this node is tail
        if (currentNode.next.next === null) {
          this.tail = currentNode;
        }
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedNode;
  }

  insertAfter(value: string, prevNode: LinkedListNode | null) {
    if (!prevNode) {
      return this;
    }

    const newNode = new LinkedListNode(value)

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    return this;
  }

  /* Util methods */

  toArray() {
    const linkedListElems = []
    let currentElem = this.head

    while (currentElem) {
      linkedListElems.push(currentElem);
      currentElem = currentElem.next;
    }

    return linkedListElems;
  }

  toString() {
    return this.toArray().map((elem) => elem.value).toString();
  }
}
