'use strict'

/*
  Walkthrough:
  Make copy of first element and store in temporary variable
  Replace first element with second element
  Replace second element with copy of first element
*/

let swap = (array, i, j) => {
	let tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}

module.exports = swap;
