// Original solutions by Teresa B. https://github.com/terabitbaci/

const MyData = {
    fruit: "apple",
    drink: "water",
    dessert: "cookie"
};






console.log('use a for...in to loop through the OBJECT and console the contents');


for (let key in MyData) {
    console.log(`${key}: ${MyData[key]}`);
}

console.log('- - - - - - - - - -');





console.log('use a forEach to loop through the OBJECT and console the contents');

//The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
//(please see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
let convertObjectKeysToAnArray = Object.keys(MyData);

//.forEach() is only for arrays (please see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
convertObjectKeysToAnArray.forEach(key => console.log(`${key}: ${MyData[key]}`));

console.log('- - - - - - - - - -');




// objects inside object

let contents = {
    nails: 40,
    bolts: 35,
    washers: 12,
    rings: {
        split: 5,
        washer: 33
    }
};

console.log('objects inside object --> return 33');

console.log(contents.rings.washer);

console.log('- - - - - - - - - -');
