export class TreeNode {
  public data: string;
  public children: Array<TreeNode>;
  public parent: null | TreeNode;

  constructor(data: string) {
    this.data = data;
    this.children = [];
    this.parent = null
  }

  add(data: string) {
    const newChild = new TreeNode(data);
    this.children.push(newChild);
  }

  remove(data: string) {
    this.children = this.children.filter((node) => node.data !== data)
  }

  toString() {
    return this.data;
  }
}

export class Tree {
  root: TreeNode | null

  constructor() {
    this.root = null
  }

  //Traversing a Tree in Depth
  traverseDF(callback: Function) {
    const stack = [this.root];

    while (stack.length) {
      const node = stack.shift();
      stack.unshift(...node!.children);
      callback(node)
    }
  }

  // Traversing a Tree in width
  traverseBF(callback: Function) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      queue.push(...node!.children)
      callback(node)
    }
  }
}
