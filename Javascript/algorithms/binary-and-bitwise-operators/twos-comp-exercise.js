'use strict';
/*
The two's complement of an N-bit number is defined as its complement with respect to 2N.
For instance, for the three-bit number 010, the two's complement is 110, because 010 inverted is 101; adding 1 to is 110 = 1000.
So the two's complement is calculated by inverting the digits and adding one.


Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator.
For example ~25 will invert the bits of the integer 25. */

let twosComp = (int) => {
    int = ~int;
    return int = int + 1;
}

console.log(twosComp(5));
