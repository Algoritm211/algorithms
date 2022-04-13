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

});
