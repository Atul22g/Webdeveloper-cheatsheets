/*
         8
        /  \
      6     10
     / \    / \
    4   7  9   11
*/

BinaryTree.bfs();

values = []

let queue = [8-BT]
while (queue.length)
  node = 8-BT
  queue = []
  values = [8-BT]

  if (node.left) {
    queue.push(6-BT)
  }

  if (node.right) {
    queue.push(10-BT)
  }

  queue = [6, 10] // length 2

  node = 6
  values = [8, 6]
  queue = [10]

  if (node.left) {
    queue.push(4)
  }

  if (node.right) {
    queue.push(7)
  }
  queue [ 10, 4, 7 ] // length 3

  node = 10
