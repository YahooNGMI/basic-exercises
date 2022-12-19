
// 6. Declare a function that checks if an element is in an array. It takes two arguments, the array, 
// and the element to look for. If the element is found, return true, otherwise, return false.

function findElementInArray(element, array) {
    return array.includes(element);
}

const resultTrue = findElementInArray(5, [1, 3, 5]);
console.log(resultTrue); //expecting true

const resultFalse = findElementInArray(5, [1, 3, 6]);
console.log(resultFalse); //expecting false