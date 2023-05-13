// Time - 61ms, Memory - 43.1MB
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
 * @return {string[]}
 */
const binaryTreePaths = (root) => {
  const result = [];
  const dfs = (node, path = '') => {
    if (node === null) {
      return '';
    }

    const isLeaf = node.left === null && node.right === null;

    path += `${node.val.toString()}${isLeaf ? '' : '->'}`;

    const left = dfs(node.left, path);
    const right = dfs(node.right, path);

    if (isLeaf) {
      result.push(path);
      return path;
    }

    return left + right;
  };

  dfs(root);
  return result;
};

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.left.left = new TreeNode(4);

// ['1->2->5', '1->2->5', '1->3']
console.log(binaryTreePaths(root));
