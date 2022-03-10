// findNthElement: O(log n)
// findElements: array - O(log n), tofind - O(n)
// case: O(n)

var counter = 0

// Finds the nth element in an array
var findNthElement = function(array, n) {
  counter++
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2)
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n)
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle)
    }
}

// var arr = Array(1000000)
//
// findNthElement(arr, 999999)
// console.log(counter)
// counter = 0
//
// findNthElement(arr, 999)
// console.log(counter)
// counter = 0
//
// findNthElement(arr, 1)
// console.log(counter)


// Find a series of elements from an array
var findElements = function(array, toFind) {
    var elements = []
    for (var i=0; i<toFind.length; i++) {
        var element = findNthElement(array, toFind[i])
        elements.push(element)
    }
    return elements
};

for(var i = 2; i <= 2000; i += 2) {
  var testArray = []
  for(var s = 1; s <= i / 2; s++) {
    testArray.push(s)
  }
  var arr = []
  for(var j = 1; j <= i; j++) {
    arr.push(j)
  }

  findElements(testArray, arr)
  console.log(i, counter)
  counter = 0
}
