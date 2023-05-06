// Time - 108ms, Memory - 50.7MB
class LinkedListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class MyLinkedList {

  head = null;
  tail = null;

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp.val;
      }
      counter += 1;
      temp = temp.next;
    }
    return -1;
  };

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    if (!this.head && !this.tail) {
      const newNode = new LinkedListNode(val);
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    const newNode = new LinkedListNode(val, this.head);
    this.head = newNode;
  };

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const newNode = new LinkedListNode(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let nextTail = new LinkedListNode(val);
    this.tail.next = nextTail;
    this.tail = nextTail;
  };

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter + 1 === index) {
        let nextNode = temp.next;
        const newNode = new LinkedListNode(val, nextNode);
        if (temp === this.tail) {
          this.tail = newNode;
        }
        temp.next = newNode;
        break;
      }
      counter += 1;
      temp = temp.next;
    }

  };

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index === 0) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }

    let temp = this.head;
    let counter = 0;
    while (temp) {
      if (counter + 1 === index) {
        if (temp.next === this.tail) {
          this.tail = temp;
        }
        temp.next = temp.next?.next || null;
        break;
      }
      counter += 1;
      temp = temp.next;
    }
  };
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);   // linked list becomes 1->2->3
console.log(myLinkedList.get(1));         // return 2
myLinkedList.deleteAtIndex(1);      // now the linked list is 1->3
console.log(myLinkedList.get(1));
