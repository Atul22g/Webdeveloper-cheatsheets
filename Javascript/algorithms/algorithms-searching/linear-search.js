'use strict'

// Best case: O(1)
// Average & worst case: O(n)

let indexOf = (array, value) => {
	for (let i=0; i<array.length; i++) {
		if (array[i] == value) {
			return i
		}
	}
	return -1
}

module.exports = indexOf;
