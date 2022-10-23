// Time - 105ms, Memory - 44.1MB
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let tail = null;

  while (head) {
    tail = new ListNode(head.val || 0, tail)
    head = head.next
  }

  return tail;
};


// Alternative solution with recursion:
/*

const reverseList = (head) => {
    if (head === null || head.next === null) return head;

    const list = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return list;
};

 */
