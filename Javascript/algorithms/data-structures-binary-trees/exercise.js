'use strict'

var BinarySearchTree = function(key, value, parent) {
  this.key = key || null
  this.value = value || null
  this.parent = parent || null
  this.left = null
  this.right = null
};

BinarySearchTree.prototype.insert = function(key, value) {
  if (this.key === null) {
    this.key = key
    this.value = value
  }
  else if (key < this.key) {
    if (this.left === null) {
      this.left = new BinarySearchTree(key, value, this)
    }
    else {
      this.left.insert(key, value)
    }
  }
  else {
    if (this.right === null) {
      this.right = new BinarySearchTree(key, value, this)
    }
    else {
      this.right.insert(key, value)
    }
  }
}

BinarySearchTree.prototype.get = function(key) {
  if (this.key === key) {
    return this.value
  }
  else if (key < this.key && this.left) {
    return this.left.get(key)
  }
  else if (key > this.key && this.right) {
    return this.right.get(key)
  }
  else {
    throw new Error('Key Error')
  }
}

BinarySearchTree.prototype.remove = function(key) {
  if (this.key === key) {
    if (this.left && this.right) {
      let successor = this.right._findMin()
      this.key = successor.key
      this.value = successor.value
      successor.remove(successor.key)
    }
    else if (this.left) {
      this._replaceWith(this.left)
    }
    else if (this.right) {
      this._replaceWith(this.right)
    }
    else {
      this._replaceWith(null)
    }
  }
  else if (key < this.key && this.left) {
    this.left.remove(key)
  }
  else if (key > this.key && this.right) {
    this.right.remove(key)
  }
  else {
    throw new Error('Key Error')
  }
}

BinarySearchTree.prototype._replaceWith = function(node) {
  if (this.parent) {
    if (this === this.parent.left) {
      this.parent.left = node
    }
    else if (this === this.parent.right) {
      this.parent.right = node
    }

    if (node) {
      node.parent = this.parent
    }
  }
  else {
    if (node) {
      this.key = node.key
      this.value = node.value
      this.left = node.left
      this.right = node.right
    }
    else {
      this.key = null
      this.value = null
      this.left = null
      this.right = null
    }
  }
}

BinarySearchTree.prototype._findMin = function() {
  if (!this.left) {
    return this
  }
  return this.left_findMin()
}

var tree1 = new BinarySearchTree(10, 'ten')
tree1.insert(5, 'five')
tree1.insert(15, 'fifteen')
tree1.insert(2, 'two')
tree1.insert(8, 'eight')
tree1.insert(12, 'twelve')
tree1.insert(18, 'eighteen')

var tree2 = {
  key: 10,
  value: 'ten',
  left: { 
    key: 5,
    value: 'five',
    left: { 
      key: 6,
      value: 'two',
      left: null,
      right: null 
    },
     right: { 
      key: 8,
      value: 'eight',
      left: null,
      right: null 
    } 
  },
  right: { 
    key: 15,
    value: 'fifteen',
    left: { 
      key: 12,
      value: 'twelve',
      left: null,
      right: null 
    },
    right: { 
      key: 18,
      value: 'eighteen',
      left: {
        key: 17,
        left: {
          key: 16,
          left: {
            key: 15,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null 
    }
  }
}
// tree: 1
//           10
//         /    \
//        5      15
//       / \    / \
//      6   8  12  18
//
// tree: 2
//           10
//         /    \
//        5      15
//       / \    / \
//      6   8  12  18
//                /
//               17

exports.tree1 = tree1;
exports.tree2 = tree2;
