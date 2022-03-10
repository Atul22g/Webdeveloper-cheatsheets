'use strict'

let swap = require('./swap')

// Best and Average Cases: O(nlog(n))
// Worst Case: O(n^2) - (when array is already sorted)

// More commonly used than merge sort (more cache-efficient and can easily be performed in-place (i.e. without additional memory allocations)).

/*
  if start index and end index have reacted the middle, then return the sorted array.

*/

let quickSort = (array, start, end) => {
  console.log(`start: ${start} end: ${end}`)
	start = start === undefined ? 0 : start
	end = end === undefined ? array.length : end
	if (start >= end) { // base case
		return array
	}

	// divide and conquer approach - array divided into two halves around a pivot value. Recursively sort until the halves' lengths are <= 1.
	let middle = partition(array, start, end)
	array = quickSort(array, start, middle)
	array = quickSort(array, middle + 1, end)
	return array
}

// Common in-place partitioning algorithm: Lumoto's algorithm:
let partition = (array, start, end) => {
	let pivot = array[end - 1]
	let j = start
	// loop through array, swapping values as you go to put them on either side of the pivot point. Finally you put the pivot in the correct place in the array (the final value).
	for (let i=start; i<end - 1; i++) {
		if (array[i] <= pivot) {
			swap(array, i, j)
			j++
		}
	}
	swap(array, end-1, j)
	return j
}

console.log(quickSort([4,3,8,23,49,12]))

module.exports = quickSort;
