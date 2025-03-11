// question2.js
function countProperties(obj) {
    return Object.keys(obj).length; // Counts the number of properties in an object
}

console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3
console.log(countProperties({ name: "Alice", age: 25 })); // Output: 2
