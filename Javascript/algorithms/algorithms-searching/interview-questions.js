'use strict'
   /* The share price for a company over a week's trading is as follows:
   [128, 97, 121, 123, 98, 96, 105]. If you had to buy shares in the company on
   one day, and sell the shares on one of the following days, write an algorithm
   to work out what the maximum profit you could make would be. */

function sharePrice(array, shares, difference) {
  let lowest;
  let highest;
  difference = difference || 0;
  if (!array.length) {
    return `You made $${difference * shares}`;
  }
  if (array[0] > array[1]) {
    return sharePrice(array.slice(1, array.length), shares, difference)
  } else {
    lowest = array[0];

    let sortArr = array.slice();
    sortArr.sort(function(a, b){return a - b}).slice();
    highest = sortArr[sortArr.length - 1];

    let oldDiff = difference;
    difference = highest - lowest;

    if (difference > oldDiff) {
      return sharePrice(array.slice(1, array.length), shares, difference);
    } else {
      return sharePrice(array.slice(1, array.length), shares, oldDiff);
    }
  }
}

// console.log(sharePrice([128, 97, 121, 123, 98, 20, 195], 10));

   /* Imagine that you wanted to find what the highest floor of a 100 story
   building you could drop an egg was, without the egg breaking. But you only
   have two eggs. Write an algorithm to work out which floors you should drop
   the eggs from to find this out in the most efficient way. */

let eggDrop = (array, value, eggs, start, end, attempts) => {
  value = value || Math.floor((Math.random() * array.length) + 1)
  start = start || 0
  end = end || array.length
  eggs = eggs === undefined ? 2 : eggs
  attempts = attempts || 0

  attempts++

  if (eggs === 2) {
    let index = Math.floor((start + end) / 2)
    let floor = array[index]

    if (floor == value) {
      return `Floor: ${floor}; Attempts: ${attempts}`
    } else if (floor < value) {
      return eggDrop(array, value, eggs, index + 1, end, attempts)
    } else if (floor > value) {
      return eggDrop(array, value, eggs - 1, start, index - 1, attempts)
    }
  }

  if (start === value) {
    return `Floor: ${start}; Attempts: ${attempts}`
  } else if (start < value) {
    return eggDrop(array, value, eggs, start + 1, end, attempts)
  }

}

let testArray = []
let createArr = (array) => {
  for (var i = 1; i < 101; i ++) {
    array.push(i);
  }
}
createArr(testArray)

// console.log(eggDrop(testArray))

   /* Imagine you are looking for a book in a library with a Dewey Decimal index.
   How would you go about it? Can you express this process as a searching algorithm? */

function deweyDecimal(decimal) {
  library = {000: {00: [ 'a-book', 'b-book', 'c-book'], 10: [ 'a-book', 'b-book', 'c-book'], 20: [ 'a-book', 'b-book', 'c-book']}, 100: {00: {0: [ 'a-book', 'b-book', 'c-book'], 10: [ 'a-book', 'b-book', 'c-book'], 20: [ 'a-book', 'b-book', 'c-book']}};
  category = Math.floor(decimal / 100);
  for (let i = 0; i < dewey.length; i++) {
    if (category === (dewey[i] / 100)) {
      return i;
    }
  }
}

// let deweySearch = (array, value, start, end, dewey, stringIdx) => {
//   dewey = dewey || '';
//   stringIdx = stringIdx || 0;
// 	start = start || 0
// 	end = end || array.length

//   if (dewey.length === value.length) {
//     return dewey
//   }
// 	let index = Math.floor((start + end) / 2)
// 	let item = array[index]
//   if (item == value[stringIdx]) {
//     return deweySearch(array, value, index + 1, end, dewey.concat(item.toString()), stringIdx + 1)
// 	} else if (item < value) {
// 		return deweySearch(array, value, index + 1, end, dewey, stringIdx)
// 	} else if (item > value) {
// 		return deweySearch(array, value, start, index - 1,  dewey, stringIdx)
// 	}
// }

// let array = [0,1,2,3,4,5,6,7,8,9]
// console.log(deweySearch(array, '338476772109'));
