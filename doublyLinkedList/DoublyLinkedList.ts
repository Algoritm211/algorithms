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

  delete(valueToDelete: string) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    // If we want multiple delete from head
    while (this.head && this.head.value === valueToDelete) {
      deleteNode = this.head.value;
      this.head = this.head?.next;
      this.head!.previous = null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next?.value === valueToDelete) {
        deleteNode = currentNode.next.value;
        if (currentNode.next === this.tail) {
          this.tail = currentNode;
          currentNode.next = null;
        }
        if (currentNode && currentNode.next && currentNode.next.next) {
          currentNode.next.next.previous = currentNode;
          currentNode.next = currentNode.next.next;
        }
      } else {
        currentNode = currentNode.next;
      }
    }

    return deleteNode;
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

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      prevNode = currentNode.previous;
      nextNode = currentNode.next;

      currentNode.next = prevNode;
      currentNode.previous = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
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
// list.append('a').append('b').append('c').append('d').reverse();
//
// console.log(list.toArray())
//
// console.log('HEAD', list.head?.value);
// console.log('TAIL', list.tail?.value);

