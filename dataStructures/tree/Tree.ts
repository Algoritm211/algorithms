
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

  contains(callback: Function, traversal: Function) {
    traversal.call(this, callback)
  }

  add(data: string, toData: string, traversal: Function) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const cbToAddParent = (node: TreeNode) => {
      if (node.data === toData) {
        newNode.parent = node;
        node.children.push(newNode)
      }
    }

    this.contains(cbToAddParent, traversal)

    if (!newNode.parent) {
      throw new Error('Element does not exists')
    }

    return this;
  }

  remove(data: string, fromData: string, traversal: Function) {
    if (this.root === null) {
      return this;
    }
    let parentNode: TreeNode | null = null as unknown as TreeNode;
    let nodeToRemove: TreeNode | null = null as unknown as TreeNode;

    const cbToFindParentToRemove = (node: TreeNode) => {
      if (node.data === fromData) {
        parentNode = node
      }

      if (node.data === data) {
        nodeToRemove = node
      }
    };

    this.contains(cbToFindParentToRemove, traversal);

    if (!parentNode) {
      throw new Error('Unable to remove from non-existent parent')
    }

    if (!nodeToRemove) {
      throw new Error('Unable to remove non-existent element')
    }

    nodeToRemove.parent = null;
    parentNode.remove(data);

    return this;
  }
}
