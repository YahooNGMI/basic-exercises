// 4. Declare an object that two properties, "numberOne", and "numberTwo", and a function on that object called "addAllNumbers", 
// that returns the difference of numberOne minus numberTwo.

const myObject = {
    numberOne: 10,
    numberTwo: 5,
    addAllNumbers: function () {
        return this.numberOne - this.numberTwo;
    }
}

let result = myObject.addAllNumbers();
console.log(result);