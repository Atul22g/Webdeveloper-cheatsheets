// a recursion is a function calling itself
function factorial(n) {

    // terminate the recursion once we hit zero
    if (n === 0) {
        console.log('the recursion has reached ' + 0);
        return 1;
    }

    // otherwise keep calling the function recursively
    else {
        console.log("inside the recursion n = " + n)
        // the function calls itself
        return factorial(n - 1) * n;
    }
}

console.log(factorial(10));
