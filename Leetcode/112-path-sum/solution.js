// Time - 79ms, Memory - 45.9MB
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, targetSum) => {

  const defineIfContainsTarget = (node, target = 0) => {
    if (node === null) {
      return false;
    }

    if (!node.left && !node.right) {
      return target - node.val === 0
    }

    return defineIfContainsTarget(node.left, target - node.val) ||
    defineIfContainsTarget(node.right, target - node.val)
  }

  const result = defineIfContainsTarget(root, targetSum)
  return result;
};

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

console.log(hasPathSum(root, 22));
