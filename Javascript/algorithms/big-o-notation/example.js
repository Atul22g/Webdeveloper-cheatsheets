var counter = 0;

// Finds the nth element in an array
var findNthElement = function(array, n) {
    counter++
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }
}

// Number of Tests
for(var i = 1; i <= 1000; i++) {
  var arr = []
  for(var j = 1; j <= i; j++) {
    arr.push(j)
  }

  //console.time(i);
  findNthElement(arr, j)
  console.log(i, counter);
  counter = 0
  //console.timeEnd(i);
}

