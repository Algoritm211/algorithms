// Time - 74ms, Memory - 47.7MB
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
const averageOfLevels = (root) => {
  const result = [];
  const baseQueue = [root];

  const bfs = (nodeQueue) => {
    if (nodeQueue.length === 0) {
      return;
    }

    const itemsInQueue = nodeQueue.length;
    const nodesValues = [];
    for (let i = 0; i < itemsInQueue; i++) {
      const node = nodeQueue.shift();
      nodesValues.push(node.val);
      if (node.right !== null) {
        nodeQueue.push(node.right);
      }

      if (node.left !== null) {
        nodeQueue.push(node.left);
      }
    }

    const sumOfValues = nodesValues.reduce((acc, elem) => acc + elem, 0);
    const average = sumOfValues / itemsInQueue;
    result.push(average);

    bfs(nodeQueue);
  };

  bfs(baseQueue);
  return result;
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(15);

// [ 3.00000, 14.50000, 11.00000]
console.log(averageOfLevels(root));
