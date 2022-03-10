'use strict'
var tree1  = require('./exercise').tree1;
var tree2 = require('./exercise').tree2;

/* Write an algorithm to check whether an arbitrary tree is a binary search tree */

let isBinaryTree = (tree) => {
  let key = tree.key
  let left = tree.left
  let right = tree.right
  if (left) {
    if (left.key > key) {
      return false
    }
    if (!isBinaryTree(left)) {
        return false
    }
  }
  if (right) {
    if (right.key < key) {
      return false
    }
    if (!isBinaryTree(right)) {
      return false
    }
  }
return true
}
// console.log(isBinaryTree(tree1), '<--isBinaryTree(tree1)');
// console.log(isBinaryTree(tree2), '<--isBinaryTree(tree2)');


/* Write an algorithm to find the height of a binary search tree */

let height = (tree) => {
  let left = tree.left
  let right = tree.right
  if (left && right) {
    return Math.max(height(left), height(right)) + 1
  }
  if (left) {
    return height(left) + 1
  }
  if (right) {
    return height(right) + 1
  }
  return 1
}
// console.log(height(tree1), '<--tree1');
// console.log(height(tree2), '<--tree2');


/* Write an algorithm to find the third largest value in a binary search tree */
let thirdLargest = (tree) => {
  let right = tree.right
  let left = tree.left
  if (right) {
    thirdLargest(right)
  } 
  // parent
  if (tree.parent.key) {
    if (!left || left.key < tree.parent.key) {
      if (tree.parent.left) {
        if (tree.parent.left.right) {
          thirdLargest(tree.parent.left.right)
        }
        return tree.parent.left.key
      }
      return tree.parent.parent.key
    } 
  }
  else {
    thirdLargest(left)
  }
  return tree.key
}
console.log(thirdLargest(tree1), '<-- thirdLargest(tree1)')
function print_tree(tree, depth) {
    if (!depth) {
        console.log("" + tree.key);
        depth = 0;
    }
    depth += 1;
    if (tree.left) {
        console.log(" ".repeat(depth) + "<" + tree.left.key);
        print_tree(tree.left, depth);
    }
    if (tree.right) {
        console.log(" ".repeat(depth) + ">" + tree.right.key);
        print_tree(tree.right, depth);
    }
}