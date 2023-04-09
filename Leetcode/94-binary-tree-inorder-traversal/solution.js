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
const inorderTraversal = (root) => {
  const result = [];

  const _inTraversal = (node) => {
    if (node === null) {
      return null;
    }

    _inTraversal(node.left);
    result.push(node.val);
    _inTraversal(node.right);
  };

  _inTraversal(root);
  return result;
};
