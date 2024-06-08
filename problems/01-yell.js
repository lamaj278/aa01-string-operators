/*
Define a function yell that takes in a string parameter and returns a "yelled"
version of that string.
*/

// Your code here 

function yell(string) {
    return string + "!!!";
}

console.log(yell("I want to go to the store"));
console.log(yell("Time to program"));

// console.log(yell("I want to go to the store")); // "I WANT TO GO TO THE STORE!!!"
// console.log(yell("Time to program")); // "TIME TO PROGRAM!!!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = yell;
