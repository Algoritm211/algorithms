// Time - 411ms, Memory - 98.1MB
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
 * @param {number} k
 * @return {number}
 */
const kthLargestLevelSum = (root, k) => {
  const levelSumMap = new Map();

  const addSum = (node, level) => {
    if (!node) return;

    const sumOfLevel = levelSumMap.get(level);
    if (sumOfLevel) {
      levelSumMap.set(level, sumOfLevel + node.val)
    } else {
      levelSumMap.set(level, node.val)
    }
  }

  const iterateByLevels = (node, level = 1) => {
    if (node === null){
      return;
    }
    addSum(node, level)
    iterateByLevels(node.right, level + 1);
    iterateByLevels(node.left, level + 1);
  }

  iterateByLevels(root)

  if (levelSumMap.size < k) {
    return -1;
  }

  const sumsByLevel = []
  levelSumMap.forEach((val) => sumsByLevel.push(val));

  const result = sumsByLevel
    .sort((a, b) => b - a)
    .at(k - 1);

  return result
};


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(kthLargestLevelSum(root, 2));
