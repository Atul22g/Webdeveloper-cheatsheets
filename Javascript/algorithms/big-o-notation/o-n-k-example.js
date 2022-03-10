//Polynomial time O(n^k)
//
//An algorithm with polynomial time complexity is one whose run time would be input size n raised to some constant power, k. So n^2 or n^3. The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires two levels of looping over an input would be O(n^2) while one requiring three levels of looping would be O(n^3). In both cases, we have polynomial time complexity.


//O(n^2)
function hasDuplicates(array) {
    let ticks = 0,
        result = false;
    for (let i = 0; i < array.length; i++) {
        ticks++;
        for (let j = 0; j < array.length; j++) {
            ticks++;
            if (array[i] == array[j] && i != j) {
                ticks++;
                result = true;
            }
        }
    }
    return {
        result: result,
        ticks: ticks
    };
}

function getRunTimeOperations(fn, input) {
    const {
        ticks, result
    } = fn(input);
    console.log(
        `With input of size ${input.length}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(hasDuplicates, [1, 2, 2]);
getRunTimeOperations(hasDuplicates, [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
getRunTimeOperations(hasDuplicates, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 99]);
