let obj1 = {name:"person 1",age:5}
let obj2 = {age:5, name:"person 1"}


// The objects obj1 and obj2 you've provided are not JSON; they are JavaScript objects. JSON (JavaScript Object Notation) is a text format that is used to serialize objects in JavaScript. However, I understand you're referring to the objects themselves and their differences.

// In JavaScript, object property order is not guaranteed, so obj1 and obj2 are essentially equivalent. The properties name and age are the same in both objects, and their order doesn't matter.

// If you want to compare the differences between them in terms of their structure and values, there are no differences. They represent the same data, just with the properties potentially appearing in different order. 
// If you're looking for a comparison that considers property order, you would need to convert them to a string format that preserves order, such as JSON. But again, in terms of their data, they're identical.

//For Example:

JSON.stringify(obj1) === JSON.stringify(obj2) //false

.isEqual(obj1, obj2) // true