// Declaring our Animal object
var Animal = function () {

    this.name = 'unknown';

    this.getName = function () {
        return this.name;
    }

    return this;
};

// Declaring our Dog object
var Dog = function () {

    // A private variable here
    var private = 42;

    // overriding the name
    this.name = "Bello";

    // Implementing ".bark()"
    this.bark = function () {
        return 'MEOW';
    }

    return this;
};


// Dog extends animal
Dog.prototype = new Animal();

// -- Done declaring --

// Creating an instance of Dog.
var dog = new Dog();

// Proving our case
console.log(
    "Is dog an instance of Dog? ", dog instanceof Dog, "\n",
    "Is dog an instance of Animal? ", dog instanceof Animal, "\n",
    dog.bark() +"\n", // Should be: "MEOW"
    dog.getName() +"\n", // Should be: "Bello"
    dog.private +"\n" // Should be: 'undefined'
);
