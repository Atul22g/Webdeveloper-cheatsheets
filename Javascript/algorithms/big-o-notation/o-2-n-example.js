//Exponential time O(2^n)
//
//Algorithms with exponential time complexity (O(2^n)) have run times that grow rapidly with increases in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time. With an input of size 10, the same algorithm will take 2^10=1024 time, and with an input of size 100, it will take 2^100=1.26765060022823 * 1030 time. Yikes!


function countTriangle(layers) {

    let ticks = 1;

    let count = 0; // The number of dots we've counted so far
    let layer = 0; // The current layer we're on
    let lastLayer = 1; // The number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // The number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks
    };
}


function getRunTimeOperations(fn, input) {
    const {
        ticks, result
    } = fn(input);
    console.log(
        `With input of size ${input}, ${fn.name} ` +
        `clocked ${ticks} ticks to generate result of ${result}.`);
}

getRunTimeOperations(countTriangle, 2);
getRunTimeOperations(countTriangle, 4);
getRunTimeOperations(countTriangle, 16);


//Running the code in the REPL, you'll see performance for inputs of size 2, 4, and 16. While there are only 6 ticks with input size 2, at input size 16, we're at 65552 ticks!
//
//In this algorithm we count the number of dots in a triangle with a given number of layers. We start at the top layer of the triangle, which is the 0th layer and has 1 dot (or you can think of it as 2^0=1). As you move to the next layer, the number of dots increases by power of 2. So, in the 1st layer, the dots you will count will be 2^1=2. In the 2nd layer, the number of dots will be 2^2=4. By the time you're at the nth layer, the number of dots would be 2^n. Therefore, as the input size increases, the number of operations to count the dots increases exponentially making the run time of this algorithm O(2^n).
