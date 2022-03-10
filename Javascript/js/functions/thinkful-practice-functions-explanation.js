//solution walkthrough

//first declare the name array
var names = ['Joe', 'Cindy', 'Lynda'];

//then declare the var compliment
var compliment = ' is great!';

//create the function to "give compliments", which is going to take 2 parameters (the array "names" and the phrase "compliment")
function complimentGiver(arr, phrase) {

    //we create an empty which is going to be the output of this function
    var completed = [];
    //parse the array element by element starting from 0
    for (var i = 0; i < arr.length; i += 1) {
        //concatenate each element of the array (arr[i]) with the phrase and the results of that, push it to "completed" array
        completed.push(arr[i] + phrase)
    }
    //return the completed array with all the elements inside
    return completed;
}

// call the function complimentGiver
console.log(complimentGiver(names, compliment));
