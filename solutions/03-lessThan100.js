// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Given two numbers, this function returns a boolean indicating whether the sum of both numbers is less than 100.
function lessThan100(a, b) {
  // Declare a variable `sum` and initialize it with the sum of the input numbers `a` and `b`.
  let sum = a + b;

  // If the sum is less than 100, return `true`; otherwise, return `false`.
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
let first = lessThan100(22, 15); // Output: true
// Explanation: The sum of 22 and 15 is 37, which is less than 100, so the function returns true.

let second = lessThan100(83, 34); // Output: false
// Explanation: The sum of 83 and 34 is 117, which is greater than 100, so the function returns false.

let three = lessThan100(3, 77); // Output: true
// Explanation: The sum of 3 and 77 is 80, which is less than 100, so the function returns true.

// Output the results:
console.log(first); // Output: true
console.log(second); // Output: false
console.log(three); // Output: true

// An arrow function is a shorthand syntax for function expressions.
const lessThanHundred = (a, b) => (a + b) < 100
console.log(lessThanHundred(12,450));