import {Tree, TreeNode } from "./Tree";

/**
 Creating Tree with this structure:
 one
 ├── two
 │   ├── five
 │   └── six
 ├── three
 └── four
      └── seven
*/
const tree = new Tree();

tree.root = new TreeNode('one');

tree.root.children.push(new TreeNode('two'));
tree.root.children[0].parent = tree.root;

tree.root.children.push(new TreeNode('three'));
tree.root.children[1].parent = tree.root;

tree.root.children.push(new TreeNode('four'));
tree.root.children[2].parent = tree.root;

tree.root.children[0].children.push(new TreeNode('five'));
tree.root.children[0].children[0].parent = tree.root.children[0];

tree.root.children[0].children.push(new TreeNode('six'));
tree.root.children[0].children[1].parent = tree.root.children[0];

tree.root.children[2].children.push(new TreeNode('seven'));
tree.root.children[2].children[0].parent = tree.root.children[2];

describe('Testing Tree functions', () => {

  it('TraverseDF works good', () => {
    const arrOfValues: Array<string> = [];
    tree.traverseDF((node: TreeNode) => arrOfValues.push(node.data))
    expect(arrOfValues).toEqual([
      'one', 'two',
      'five', 'six',
      'three', 'four',
      'seven'
    ])
  });

  it('TraverseBF works good', () => {
    const arrOfValues: Array<string> = [];
    tree.traverseBF((node: TreeNode) => arrOfValues.push(node.data))
    expect(arrOfValues).toEqual([
      'one',   'two',
      'three', 'four',
      'five',  'six',
      'seven'
    ])
  })

  it('Contains works good', () => {
    const cb = jest.fn();
    const arrOfValues: Array<string> = [];
    tree.traverseDF((node: TreeNode) => arrOfValues.push(node.data))

    tree.contains(cb, tree.traverseDF);

    expect(cb).toBeCalledTimes(arrOfValues.length)
  })

  it('Add works good', () => {
    tree.add('eight', 'seven', tree.traverseBF);
    let searchNode: TreeNode
    const search = (node: TreeNode) => {
      if (node.data === 'seven') {
        searchNode = node
      }
    }

    tree.contains(search, tree.traverseBF)

    expect(searchNode!.children[0].parent?.data).toBe('seven')
    expect(searchNode!.children[0].data).toBe('eight')
  })

  it('Add works throws right error', () => {
    expect(
      () => tree.add('someData', 'noDataElem', tree.traverseBF)
    ).toThrowError('Element does not exists');
  });

  it('Remove function works good', () => {
    const tree = new Tree()
    tree
      .add('one', 'null', tree.traverseBF)
      .add('two', 'one', tree.traverseBF)
      .add('three', 'one', tree.traverseBF)
      .add('four', 'one', tree.traverseBF);

    tree.remove('three', 'one', tree.traverseBF)
    expect(tree.root?.children.length).toBe(2);
    expect(tree.root?.children.toString()).toBe('two,four');
  })

  it('Remove function throws right errors', () => {
    const tree = new Tree()
    tree
      .add('one', 'null', tree.traverseBF)
      .add('two', 'one', tree.traverseBF);

    expect(
      () => tree.remove('three', 'one', tree.traverseBF)
    ).toThrowError('Unable to remove non-existent element')

    expect(
      () => tree.remove('two', 'five', tree.traverseBF)
    ).toThrowError('Unable to remove from non-existent parent')
  });
});
