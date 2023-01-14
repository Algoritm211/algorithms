// Time - 112ms, Memory - 47.8MB
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let resultValues = [];

  // If we have sum like 10, we will put 0 to listNode and 1 will be addToSum
  let addToSum = 0;

  while (l1 || l2) {
    const valList1 = l1?.val || 0;
    const valList2 = l2?.val || 0;

    const rawResult = (valList1 + valList2 + addToSum).toString().split('');
    const resultForAddListNode = +rawResult.at(-1);

    if (rawResult.length > 1) {
      addToSum = +rawResult[0]
    }

    if (rawResult.length === 1) {
      addToSum = 0;
    }

    resultValues.push(resultForAddListNode);

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (addToSum) {
    resultValues.push(addToSum)
  }

  const result = new ListNode(resultValues.shift());
  let temp = result;
  while (resultValues.length) {
    const val = resultValues.shift();

    const newNode = new ListNode(val);

    temp.next = newNode;
    temp = temp.next
  }

  return result;
};

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);


const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);


console.log(addTwoNumbers(list1, list2));
