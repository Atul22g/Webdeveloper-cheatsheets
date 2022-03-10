'use strict'

let swap = require('./swap');

// Best Case: O(n) - (nodes are already in order, checks each pair once)
// Worst & Average Cases: O(n^2) - (each value needs swapping with each other value for worst case)

/*
  Walkthrough:
  Keep a counter (i.e. swaps) of the number of swaps, this will tell us whether to recurse
  Traverse the entire array exclusing the last element comparing the current element with the next.
  If the current element is greater than the following element, swap them and incriment the swap counter.
  If we needed to swap any values, recursively call bubbleSort again. If no swaps were made, the array is in order.
*/

let bubbleSort = (array) => {
	let swaps = 0
	for (let i=0; i<array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			swap(array, i, i + 1)
			swaps++
		}
	}

	// If the number of swaps is greater than zero, then the list is definitely not in the correct order yet, so we need to make recursive call to bubbleSort
	if (swaps > 0) {
		return bubbleSort(array)
	}
	return array
}

module.exports = bubbleSort;
