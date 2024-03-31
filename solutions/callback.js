// Write a JavaScript function that takes an array of numbers and a callback function as arguments. The function should apply the callback function to each element in the array and return the modified array.

function applyCallbackToElements(arr, callbackFn) {
  return arr.map(callbackFn)
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6,]

// Define a callback function to double each element
let double = num => num * 2;

// Apply the callback function to each element in the array
let modifiedArray = applyCallbackToElements(numbers, double)
console.log(modifiedArray); // [ 2, 4, 6, 8, 10, 12 ]

