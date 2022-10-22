// Time - 66ms, Memory - 43.8MB

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let tempListNode = new ListNode();
  let tail = tempListNode;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    }

    tail = tail.next;
  }

  if (list1) tail.next = list1;
  if (list2) tail.next = list2;

  return tempListNode.next;
};
