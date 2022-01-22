class DoublyLinkedListNode {
  public value: string;
  public previous: DoublyLinkedListNode | null;
  public next: DoublyLinkedListNode | null;

  constructor(
    value: string,
    previous: DoublyLinkedListNode | null = null,
    next: DoublyLinkedListNode | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString() {
    return `${this.value}`
  }
}

export class DoublyLinkedList {
  public head: DoublyLinkedListNode | null;
  public tail: DoublyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: string) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode
      return this;
    }

    newNode.previous = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;

    return this
  }

  prepend(value: string) {
    const newNode = new DoublyLinkedListNode(value, null, this.head);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.head.previous = newNode;
    newNode.next = this.head;

    this.head = newNode
    return this;
  }

  find(searchValue: string | undefined) {
    if (!searchValue || !this.head || !this.tail) {
      return null;
    }

    let currentElem = this.head;

    while (currentElem) {
      if (currentElem.value === searchValue) {
        return currentElem.value;
      }
      currentElem = currentElem.next!;
    }

    return null;
  }



  /* Util methods */
  toArray() {
    const nodesArray = [];

    let currentElem = this.head;

    while (currentElem) {
      nodesArray.push(currentElem.value);
      currentElem = currentElem.next;
    }

    return nodesArray
  }

  toString() {
    return this.toArray().toString();
  }
}

// const list = new DoublyLinkedList();
//
// list.prepend('a').prepend('b').prepend('c');
//
// console.log(list.toArray())
