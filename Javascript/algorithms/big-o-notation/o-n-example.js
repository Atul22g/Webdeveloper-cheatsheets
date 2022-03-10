//Linear time O(n)
//
//Algorithms with linear time complexity (O(n)) have run times that are directly proportional to the size (n) of the input. Given input a and input b, where b is twice as large as a, it will take a linear algorithm twice as long to process b compared to a.

function findMin(array) {
    let min = array[0],
        ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++
        if (array[i] < min) {
            ticks++;
            min = array[i];
        }
    }
    return {
        result: min,
        ticks: ticks
    };
}

function getRunTimeOperations(fn, input) {
    const {
        ticks,
        result
    } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(findMin, [3, 2, 4]);
getRunTimeOperations(findMin, [4, 5, 6, 7, 8, 9, 10, 3])
getRunTimeOperations(findMin, [10, 2, 3, 4, 5, 6, 7, 8, 9])
getRunTimeOperations(findMin, [99, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]);
