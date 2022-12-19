// 7. Declare an object that has a single property, "clothes", which is an empty array, 
// a function on that object called "putOnClothes" which take a single argument, an item of clothes you want to put on 
// (which will be a string, like "hat"). If the object is already wearing that piece of clothing, throw an error, otherwise, 
// add the clothes to the array and log out the new clothes array.

const myObject = {
    clothes: [],
    putOnClothes: function (clothing) {
        if (this.clothes.includes(clothing)) {
            throw Error("Piece of clothing is already being worn");
        } else {
            this.clothes.push(clothing);
        }
    }
}

const hat = { name: 'hat' }
const shoe = { name: 'shoe' }
myObject.putOnClothes(hat);

myObject.putOnClothes(shoe);
console.log(myObject.clothes);
myObject.putOnClothes(hat); //expect error
