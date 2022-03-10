// case: O(n)
var counter = 0;

// Doubles every value in an array
var doubleArray = function(array) {
    for (var i=0; i<array.length; i++) {
    		counter++;
        array[i] = array[i] * 2;
    }
    return array;
};

for(var i = 1; i <= 100; i++) {
  var testArray = []
  for(var s = 1; s <= i; s++) {
    testArray.push(s)
  }

  doubleArray(testArray);
  console.log(i, counter);
  counter = 0;
}