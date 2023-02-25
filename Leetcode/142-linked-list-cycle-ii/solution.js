// Time - 82ms, Memory - 45.5MB
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  let tempNode = head;

  const checkedMap = new Map();

  while (tempNode !== null) {
    checkedMap.set(tempNode, 'marked');

    if (checkedMap.get(tempNode.next) === 'marked') {
      return tempNode.next;
    }
    tempNode = tempNode.next;
  }

  return null;
};

const list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);

list.next.next.next.next = list.next;

console.log(detectCycle(list));
