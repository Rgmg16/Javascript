//arrays sample
let Gospel = ["Mark", "Matthew", "Luke", "John"];
console.log(Gospel);
//Accesing of arrays
console.log(Gospel[0]);
console.log(Gospel[3]);
//how to get length of arrays
console.log(Gospel);
//how to get an array in a given length of arrays
console.log(Gospel[Gospel.length - 2]);
console.log(Gospel[Gospel.length - 4]);
console.log(Gospel[Gospel.length - 3]);
console.log(Gospel[Gospel.length - 1]);
//Modification of array elements
Gospel[3] = "Philip"
console.log(Gospel);
//Adding an element into an array-at the end
Gospel.push("James");
console.log(Gospel);
//Adding an element to an array-at the beginning
Gospel.unshift("Thomas");
console.log(Gospel);
//Removing the last element
Gospel.pop()
console.log(Gospel);
//Removing the first element
Gospel.shift()
console.log(Gospel);
//Removing a certain index/indices
Gospel.splice(3)
console.log(Gospel);
