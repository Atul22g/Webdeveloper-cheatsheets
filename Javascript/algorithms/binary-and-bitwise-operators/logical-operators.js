'use strict'
/*---------- FORMATTING FUNCTIONS ----------*/
let formatOne = (int, result, name) => {
    return [name, ': ', int, ' (', padBin(int.toString(2)), ') => ', result, ' (', padBin(result.toString(2)), ')'].join('');
}

// FORMATS TWO-INTEGER OPERATORS
let formatTwo = (int1, int2, op, result, name) => {
    return [name, ': ', int1, ' (', padBin(int1.toString(2)), ') ', op, ' ', int2, ' (', padBin(int2.toString(2)), ') => ', result, ' (', padBin(result.toString(2)), ')'].join('');
}

// FORMATS RESULT FOR 'NOT' OPERATOR
let formatNot = (int, result) => {
    let bin = padBin(int.toString(2));
    return ['not: ', '~', int, ' (~', bin, ') => ', result, ' (', binInvert(bin), ')'].join('');
} 

let formatCheck = (int, result, name) => {
    return [name, ': ', int, ' (', padBin(int.toString(2)), ') => ', result].join('');
}

// ADDS PADDING FOR 8-BIT NUMBERS
let padBin = (bin) => {
var numZeros = 8 - bin.length;
    for (var i = 0; i < (numZeros); i++) {
            bin = '0'+ bin;
    }
    return bin;
}

// INVERTS BITS
let binInvert = (bin) => {
    bin = bin.split('0').join('2');
    bin = bin.split('1').join('0');
    bin = bin.split('2').join('1');
    return bin;
}


/* ----------- THE AND (&) OPERATOR -----------*/
    /* Write a function that takes an integer value and checks to see if it is even or odd using the big-wise AND operator. Hint: Think about what the value of the least-significant bit will be for even and odd numbers. */

let evenOrOdd = (int) => {
    let valueA = 1;
    let valueB = int;
    let aAndB = (valueA&valueB);
    let result = 'even'
    if (aAndB === valueA) {
        result = 'odd';
    }
    return formatCheck(int, result, 'evenOrOdd');
}
console.log(evenOrOdd(11));

    /* Why would using bit-wise operations be potentially faster for checking whether a number is even or odds as opposed to using something like the modulo operator (for example randInt % 2)? */

        // Because binary operations are inherently faster, because its the native format the data is being stored, and it doesnt have to translate it back and forth.


/* ----------- THE OR (|) OPERATOR -----------*/
    /* Write a function that takes in two integer values and prints out the resultant value when you AND the two input values and then also when you OR the two input values. */

let andOr = (int1, int2) => {
    let and = (int1&int2);
    let or = (int1|int2);

    return [formatTwo(int1, int2, '&', and, 'AND'), 
            formatTwo(int1, int2, '|', or, 'OR')]
}
console.log(andOr(2, 31));


/* ---------- THE XOR OPERATOR (^) ----------- */
    /* Extend the previous function further by adding logic for the XOR operation when two integer values are input. Add a third parameter which denotes which type of operation to execute. Print out the resultant value for the associated operation type. */

let andOrXor = (int1, int2, op) => {
    let operation = [int1, op, int2];
    let result = eval(operation.join(''));

    return formatTwo(int1, int2, op, result, 'XOR');
}
console.log(andOrXor(6, 20, '^'));


/*----------- THE NOT OPERATOR (~) -----------*/
    /* Write a function that takes in an integer value and prints out its complement value. */

let not = (int) => {
    let result = ~int;
    return formatNot(int, result)
}
console.log(not(8));

    /* What do you notice about the numbers which are output? What about if you give a large input value? */

        // The output for an integer (n) are always -(n) -1; for example, the output for 5 is -6. This is because by simply inverting each bit, we are not accounting for zero. This is why we must add one at the end of inversion to get the Two's Complement number. 


/*---------- INTERVIEW QUESTIONS -----------*/
    /* Write a function which sets the third bit of a number. */
let setThird = (num, bit) => {
    let bin = padBin(num.toString(2));
    let result = parseInt(bin.substr(0, 5) + bit + bin.substr(6), 2);
    return formatOne(num, result, 'setThird');
}
console.log(setThird(15, 0));

    /* Write a function which toggles the third bit of a number. */
let togThird = (num) => {
    let bin = padBin(num.toString(2));
    let bit = bin.substring(5, 6);
    if (bit == 1) {
        bit = 0;
    } else {
        bit = 1;
    }
    let result = parseInt(bin.substr(0, 5) + bit + bin.substr(6), 2);
    return formatOne(num, result, 'togThird');
}
console.log(togThird(75));

    /* Write a function which clears (sets to zero) the third bit of a number. */
let clearThird = (num) => {
    let bin = padBin(num.toString(2));
    let bit = 0;
    let result = parseInt(bin.substr(0, 5) + bit + bin.substr(6), 2);
    return formatOne(num, result, 'clearThird')
}
console.log(clearThird(45));
// 
    /* Write a function which tells you whether the third bit of a number is set. */
let isThirdSet = (num) => {
    let bin = padBin(num.toString(2));
    let bit = bin.substring(5, 6);
    let result = false;
    if (bit == 1) {
        result = true;;
    }
    return formatCheck(num, result, 'isThirdSet'); 
} 

console.log(isThirdSet(13));