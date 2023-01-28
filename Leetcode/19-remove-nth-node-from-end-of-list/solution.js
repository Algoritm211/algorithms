// Time - 63ms, Memory - 43.5MB
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const reverseList = (head) => {
  let tail = null;

  while (head) {
    tail = new ListNode(head.val, tail);
    head = head.next;
  }

  return tail;
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
 * @param {number} elemToDelete
 * @return {ListNode}
 */
const removeNthFromEnd = (head, elemToDelete) => {
  let checkedElems = 1;
  let reversedListHead = reverseList(head);
  let temp = reversedListHead;

  if (elemToDelete === 1) {
    reversedListHead = reversedListHead.next;
    return reverseList(reversedListHead);
  }


  while (temp) {
    if (checkedElems + 1 === elemToDelete) {
      temp.next = temp.next.next
      break
    }
    checkedElems += 1
    temp = temp.next;
  }
  return reverseList(reversedListHead);
};


const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

// [1,2,3,5]
console.log(removeNthFromEnd(list, 2));


