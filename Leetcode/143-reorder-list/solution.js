// Time 74ms, Memory - 50.17MB, O(n) time, O(1) space
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  // We have to split list to two parts
  // One pointer will move one by one, second pointer will one - after one

  let slowPointer = head;
  let fastPointer = head.next;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // We have to reverse second part, because we don't
  // have an opportunity to access previous element, so we need to reverse it and
  // take one element from the first part, and one element from the second part

  let startSecondPart = slowPointer.next;
  // Because it will be end of the new list
  slowPointer.next = null

  let prev = null;

  while (startSecondPart) {
    let temp = startSecondPart.next;
    startSecondPart.next = prev;
    prev = startSecondPart;
    startSecondPart = temp;
  }

  // Now we need to merge two parts, one element from the first part,
  // one from the second

  let firstFinalPart = head;
  let secondFinalPart = prev;

  while (secondFinalPart) {
    let temp1 = firstFinalPart.next;
    let temp2 = secondFinalPart.next;

    firstFinalPart.next = secondFinalPart;
    secondFinalPart.next = temp1;

    firstFinalPart = temp1;
    secondFinalPart = temp2;
  }
};

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

reorderList(list);
