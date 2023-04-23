// Time - 57ms, Memory - 44.9MB
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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const nodeValByLevel = new Map();

  const writeValue = (node, level) => {
    const value = nodeValByLevel.get(level);
    if (value) {
      nodeValByLevel.set(level, [...value, node.val])
      return;
    }

    nodeValByLevel.set(level, [node.val])
  }

  const goTroughLevels = (node, level = 1) => {
    if (node === null) {
      return;
    }

    writeValue(node, level);
    goTroughLevels(node.left, level + 1);
    goTroughLevels(node.right, level + 1);
  }

  goTroughLevels(root);

  const result = [];
  for (const levelArr of nodeValByLevel.values()) {
    result.push(levelArr)
  }

  return result;
};


const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));
