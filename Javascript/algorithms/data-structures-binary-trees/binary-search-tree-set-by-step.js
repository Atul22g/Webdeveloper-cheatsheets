//Build constructor: 
  // Initialize a binary search tree with three optional parameters: key, value, and parent. 
  // Initialize variables for this.key, this.value, this.parent, this.left & this.right. If parameters are passed, set to parameter. Otherwise set to null as default.

//Prototype method: insertion (.insert(key, value))
  // 1. Check to see if the root node is empty
      //If null, set key and value to the parameters passed in
  // 2. Check to see if the passed key is less than parent's key
      //A. Check to see if left node is empty
          // if so, call BinarySearchTree(key, value, this) create new key value pair here
      //B. Else, set new key value pair to the node
  // 3. Else, passed key must be greater than parent's key
      //A. Check to see if righty node is empty
        // if so, call BinarySearchTree(key, value, this) create new key value pair here
      //B. Else, set new key value pair to the node

//Prototype method: Retrieval (.get(key))
  //1. Check if the key is equal to the root key.
    // if so, return parent's value
  //2. If key is less than the parent's key and the left node exists (is truthy), keep calling .get recursively with this.key set to left node.
  // 3. If key is greater than the parent's key and the right node exists (is truthy), keep calling .get recursively with this.key set to right node.
  // 4. Key does not exist and error is thrown

//Prototype method: Removal (.remove(key))
  // 1. Check if key is equal to the root key.
    // a. checks if right node and left node exist (are truthy).
      // if so, successor (replacement) would be from right node (._findMin of right node)
      // set parent key to equal successor key
      // set parent value to equal successor value
      // call .remove(sucessor.key) on successor
    // b. checks if only left node exists (is truthy)
      // call current node._replaceWith(left node)
    // c. checks if only right node exists (is truthy)
      // call current node._replaceWith(right node)
    // d. else neither right nor left node exist (both are falsey)
      // parent node is set to null (call ._replaceWith(null))
  //2. If key is less than the parent's key and the left node exists (is truthy), keep calling .remove recursively with this.key set to left node.
  // 3. If key is greater than the parent's key and the right node exists (is truthy), keep calling .remove recursively with this.key set to right node.
  // 4. Key does not exist and error is thrown

// Prototype method: ._replaceWith(node)
  // 1. Checks if node has a parent
    // a. checks if node were replacing is the same as its parent's left node or right node (checks if node being replaced is left node or right now)
      // if left node, left node now becomes passed node
      // if right node, right node now becomes passed node
    // b. checks if passed node exists (is truthy)
      // sets node's new parent to the parent of the node being replaced
  // 2. Else (refers to root node which has no parent)
    // a. checks if passed node exists (is truthy)
      // if so, sets all 'this' variables for root node to the passed node's variables
    // b. else (if passed node is falsey)
      // 'this' variables all set to null

// Prototype method: ._findMin()
  // 1. checks if left node does not exist (is falsey)
    // if so, returns current node.
  // 2. (assuming that left node does exist) returns left node, recursively calling ._findMin on it.

