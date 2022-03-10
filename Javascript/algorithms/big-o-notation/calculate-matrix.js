// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var counter = 0;
// [10, 20, 30 , 40 , 50]
// 
// O(n^2)
var sampleAutocorrelationMatrix = function(array) {
    var matrix = [];
    for (var i=0; i<array.length; i++) {
        var row = [];
        for (var j=0; j<array.length; j++) {
            counter++
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};

// Test Data
for(var i = 1; i <= 100; i++) {
  var testArray = []
  for(var s = 1; s <= i; s++) {
    testArray.push(s)
  };

  sampleAutocorrelationMatrix(testArray);
  console.log(i, counter);
  counter = 0;
}