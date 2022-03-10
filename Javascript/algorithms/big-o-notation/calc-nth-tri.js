// Calculates the nth triangle number
// This one's a challenge! :)

// case: O(n!) .... O(stupid)
var counter = 0;

var triangleNumbers = function(n) {
		counter++;
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};

// Test data
for(var i = 1; i <= 10; i++) {
  triangleNumbers(i);
  console.log(i, counter);
  counter = 0;
}


// 6 > 1
// 5 > 2 => 4 > 2 => 