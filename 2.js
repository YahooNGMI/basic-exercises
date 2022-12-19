// 2. Declare a function that takes two arguments, and if the first argument is greater than the second one, 
// return true, otherwise return false.

function checkIfGreater(argument1, argument2) {
    if (argument1 > argument2) {
        return true
    } else {
        return false
    }
}

console.log(checkIfGreater(10, 1)); //expecting true
console.log(checkIfGreater(1, 10)); //expecting false