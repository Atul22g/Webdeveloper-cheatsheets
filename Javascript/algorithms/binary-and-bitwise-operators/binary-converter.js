'use strict';
// CONVERTS AN INTEGER INTO A 32-BIT BINARY, PASS INTEGER AND '+' OR '-'
	// TODO: FIGURE OUT HOW TO 'ADD ONE' AT THE END
let intToBin = (int, sign, bin) => {
	var bin = bin || '';
	var remainder = int % 2;
	if (int === 0) {
		bin = remainder.toString() + bin;
		if (sign === '-') {
			return binInvert(bin);
		}
		return console.log(padBin(bin, sign));
	} else if (remainder === 1) {
		int = (int - 1);
	}
	int = int / 2;
	return intToBin(int, sign, (remainder.toString() + bin));
}

let binInvert = (bin) => {
	bin = bin.split('0').join('2');
	bin = bin.split('1').join('0');
	bin = bin.split('2').join('1');
	return console.log(padBin(bin));
}

let padBin = (bin, sign) => {
	var numZeros = 32 - bin.length;
	for (var i = 0; i < (numZeros); i++) {
		if (sign === '+') {
			bin = '0'+ bin;
		} else {
			bin = '1' + bin;
		}
	}
	bin = bin.substring(0, 8) + ' ' + bin.substring(8, 16) + ' ' + bin.substring(16, 24) + ' ' + bin.substring(24);
	return bin;
}

intToBin(6, '+');

/*-------- ALTERNATE SOLUTION FOR 'evenOrOdd' ----------*/
let evenOrOddAlt = (int) => {
 let valueA = 1;
 let valueB = int;
 let aAndB = (valueA&valueB).toString(2);
 let leastSigBit = aAndB.substring(aAndB.length - 1);
 if (leastSigBit == 1) {
     return 'odd';
 }
 return 'even';
}
// console.log(evenOrOddAlt(-3));