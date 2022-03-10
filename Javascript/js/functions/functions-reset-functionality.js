var user = {
    name: "mr smith",
    profession: "dandy fella",
    age: 100000,

    // reset method (you can reset to "undefined" or to anything else; below is example with the reset to "-")
    reset: function () {
        this.name = '-'; // "this" refers to the above object (i.e. user)
        this.profession = '-';
        this.age = '-';
    }

}


//run the reset function
user.reset();



//alert(user.name); // will show "-"
//alert(user.profession); // will show "-"
//alert(user.age); // will show "-"
alert(user.banana); // will show "undefined"


/*
How tp delete a JavaScript variable?

You cannot delete a variable if you declared it (with var x;) at the time of first use.
However, if your variable x first appeared in the script without a declaration, then you can use the delete operator (delete x;) and your variable will be deleted, very similar to deleting an element of an array or deleting a property of an object.

A longer answer: If you declared your variable x with the var keyword at the time of first use, then delete x will not have any effect: x will still be available and hold the same value as before. As a partial workaround, you can set your variable to null or to undefined; however, this is not equivalent to deleting the variable, as shown in the example below.

// x does not exist yet
document.write(x);                        // Error: x is not defined
document.write(typeof x);                 // undefined
document.write(window.hasOwnProperty(x)); // Error: x is not defined

// declare x with the var keyword
var x = 1;                                // 1
document.write(typeof x);                 // number
document.write(window.hasOwnProperty(x)); // false

// delete x does not work.
delete x;
document.write(x);                        // 1
document.write(typeof x);                 // number
document.write(window.hasOwnProperty(x)); // false

x=null;                                   // null
document.write(typeof x);                 // object
document.write(window.hasOwnProperty(x)); // false

x=undefined;                              // undefined
document.write(typeof x);                 // undefined
document.write(window.hasOwnProperty(x)); // true

Surprisingly, if you have not declared your variable with the var keyword at the time of first use, then delete will work:

// y is first used without var declaration
y = 1;                                    // 1
document.write(typeof y);                 // number
document.write(window.hasOwnProperty(y)); // false

// now y is belatedly declared using var
var y;                                    // 1
document.write(typeof y);                 // number
document.write(window.hasOwnProperty(y)); // false

y=null;                                   // null
document.write(typeof y);                 // object
document.write(window.hasOwnProperty(y)); // false

y=undefined;                              // undefined
document.write(typeof y);                 // undefined
document.write(window.hasOwnProperty(y)); // true

// delete y WORKS!
delete y;
document.write(y);                        // Error: y is not defined
document.write(typeof y);                 // undefined
document.write(window.hasOwnProperty(y)); // Error: y is not defined
*/



/*
How do I delete an array element in JavaScript?

Two different ways to delete an element myArray[n] from myArray are:
- delete myArray[n] (faster, but leaves a gap at index n)
- myArray.splice(n,1) (slower, but does not leave a gap in the array)

For example, to delete the myArray[5] element from myArray (leaving a gap), use the delete statement: delete myArray[5]. You can use myArray.hasOwnProperty(n) to check if the element myArray[n] is present in myArray. Note that setting the array element to null or to undefined is not equivalent to deleting the element, as shown in the example below:

var myArray = new Array(0,10,20,30,40);

// myArray[5] does not exist yet
document.write(myArray[5]);                // undefined
document.write(typeof myArray[5]);         // undefined
document.write(myArray.hasOwnProperty(5)); // false

// create myArray[5] by assignment
myArray[5] = 1;                            // 1
document.write(typeof myArray[5]);         // number
document.write(myArray.hasOwnProperty(5)); // true

myArray[5] = null;                         // null
document.write(typeof myArray[5]);         // object
document.write(myArray.hasOwnProperty(5)); // true

myArray[5] = undefined;                    // undefined
document.write(typeof myArray[5]);         // undefined
document.write(myArray.hasOwnProperty(5)); // true

delete myArray[5];
document.write(myArray[5]);                // undefined
document.write(typeof myArray[5]);         // undefined
document.write(myArray.hasOwnProperty(5)); // false

Just like deleting an array element, you can also delete an object property. However, in JavaScript you cannot delete a variable declared with the var keyword at the time of first use.
*/
