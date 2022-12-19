
// 3. Declare a function that takes a single argument, 
// an array of numbers, and loops over all the elements of the array, adding them together, and 
// returning the total sum of all the elements in the array.

function sumArray(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {

        total += array[i];


    }
    return total;
}

console.log(sumArray([1, 2, 3, 4])); //expecting 10