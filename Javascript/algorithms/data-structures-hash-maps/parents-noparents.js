/***
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.
For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
1   2   4
 \ /   / \
  3   5   8
   \ / \ / \
    6   7   9
Write a function that takes this data as input and returns 3 collections: one containing all individuals with zero known parents, one containing all individuals with exactly one known parent and one containing all individuals with exactly two known parents.

Sample output:
Zero parents: 1, 2, 4
One parent: 5, 8, 9
Two parents: 3, 6, 7

 ***/


let parentChildPairs = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [8, 7],
    [8, 9]
];

function showRelations(input) {
    let diagram_map = {};

    //build a map for the diagram counting the children and the parents
    for (let i = 0; i < input.length; i++) {
        let [this_parent, this_child] = input[i];
        if (!diagram_map[this_parent]) {
            diagram_map[this_parent] = 0;
        }
        if (!diagram_map[this_child]) {
            diagram_map[this_child] = 1;
        } else {
            diagram_map[this_child] += 1;
        }
    }

    console.log("diagram_map ==> ", diagram_map, "<==");

    //parse the map to store items with 0, 1 and 2 parents
    let zero_parents = [];
    let one_parent = [];
    let two_parents = [];

    for (diagram_item in diagram_map) {
        console.log("diagram_item ==> ", diagram_item, "<==");

        if (diagram_map[diagram_item] === 0) {
            zero_parents.push(+diagram_item);
        }
        if (diagram_map[diagram_item] === 1) {
            one_parent.push(+diagram_item);
        }
        if (diagram_map[diagram_item] === 2) {
            two_parents.push(+diagram_item);
        }
    }
    return {
        zero_parents,
        one_parent,
        two_parents
    };
}

console.log(showRelations(parentChildPairs))