// Time - 85ms, Memory - 44.2MB
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
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
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {

  let tempNode = head

  while (tempNode) {
    const nodeVal = tempNode.val;

    if (nodeVal === tempNode.next?.val) {
      tempNode.next = tempNode.next.next;
    } else {
      tempNode = tempNode.next
    }
  }

  return head;
};

const list = new ListNode(1);
list.next = new ListNode(1);
list.next.next = new ListNode(2);

// [1, 2]
console.log(deleteDuplicates(list));
