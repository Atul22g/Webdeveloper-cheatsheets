'use strict'

let swap = require('./swap')
let test = [9, 1, 10, 7, 4, 8]
let test2 = [ 1, 4, 7, 8, 9, 10 ]
let books = ['In Search of Lost Time', 'Ulysses', 'Don Quixote', 'Moby Dick', 'Hamlet', 'War and Peace', 'The Odyssey', 'The Great Gatsby', 'The Divine Comedy', 'Madame Bovary', 'The Brothers Karamazov', 'One Hundred Years of Solitude', 'The Adventures of Huckleberry Finn', 'The Iliad', 'Lolita', 'Anna Karenina', 'Crime and Punishment', 'Alices Adventures in Wonderland', 'The Sound and the Fury', 'Pride and Prejudice']

/* Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. */

let sortInt = (array, low, high) => {
	let temp = new Array(high)
	let output = []
	for (let i=0; i < array.length; i++) {
		temp[array[i]] = array[i]
	}
	for (let i=0; i < temp.length; i++) {
		if (temp[i]) {
			output.push(temp[i])
		}
	}
	return output
}
// account for duplicates e.g., sortInt([1,1,1,2,1,3,2,1,4,1,5,1,2,1,4,1,2,1,3], 1, 4);
console.log(sortInt(test, 1, 10), '<-- sortInt')

/* Write an algorithm to shuffle an array into a random order in-place (i.e. without creating a new array). */

let randomize = (array) => {
	for (let i=0; i < array.length - 1; i++) {
		let j = Math.floor(Math.random() * (array.length - (i + 1))) + (i + 1);
		swap(array, i, j)
	}
	return array
}

console.log(randomize(test2), '<-- randomize')

/* Imagine that I gave you twenty books to sort in alphabetical order. How would you go about it? Can you express this as an algorithm? */

let sortBooks = (array) => {
	let output = [array[0]]

	for (let i=1; i < array.length; i++) {
		let book = array[i]
		for (let j=0; j < output.length; j++) {
			let bookComp = book.replace(/^(the|a) /i, '')
			let outputComp = output[j].replace(/^(the|a) /i, '')
			if (bookComp < outputComp) {
				output.splice(j, 0, book)
				break
			} 
		}
		if (output.length < i + 1) {
			output.push(book)
		}
		
	}
	return output
}

console.log(sortBooks(books), '<-- sortBooks')
