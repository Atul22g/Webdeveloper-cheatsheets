'use strict'

class BinaryTree {

    //constructor
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Best, average & worst cases: O(n)
    dfs(values) {
        //create an output array
        values = values || [];

        //if there are elements on the left of the node
        if (this.left) {
            //recursevely add them to the ouput array
            values = this.left.dfs(values);
        }
        values.push(this.value);

        //if there are elements on the right of the node
        if (this.right) {
            //recursevely add them to the ouput array
            values = this.right.dfs(values);
        }

        //return the output array
        return values;
        //  This is an in-order search, where the left-branch is visited, then the node itselft, then the right branch. If the node is handled before the branches then this is known as pre-ordering. And if the node is handled after the branches then this is known as post-ordering. Each ordering will give you the node values in a different order.
    }

    // Also O(n)
    bfs(values) {
        //create an output array
        values = values || [];

        // first in, first out
        let queue = [this];

        //while there are items in the tree
        while (queue.length) {
            //consider the first element as the node
            let node = queue.shift();
            //add the node the output array
            values.push(node.value);

            //if there are elements on the left of the node
            if (node.left) {
                //add them to the queue array
                queue.push(node.left);
            }

            //if there are elements on the right of the node
            if (node.right) {
                //add them to the queue array
                queue.push(node.right);
            }
        }

        //return the output array
        return values;
    }
}


module.exports = BinaryTree;
