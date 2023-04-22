// Time - 64ms, Memory - 41.9MB
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {
  const result = [];
  const stack = [root];

  while (stack.length !== 0) {
    const elem = stack.pop();

    if (elem !== null) {
      result.unshift(elem.val);
      stack.push(elem.left);
      stack.push(elem.right);
    }
  }

  return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(postorderTraversal(root));
