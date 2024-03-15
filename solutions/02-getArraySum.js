/**
   * This function calculates the sum of all elements in a given array.
   * It only considers numbers and ignores non-numeric elements.
   *
   * @param {number[]} number - An array of numbers (and potential non-numeric elements)
   * @returns {number} The sum of all numeric elements in the given array
   */

function getArraySum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (!isNaN(element)) {
      // isNaN is a JavaScript function used to check if a value is not a number
        // If the element is a number, add it to the sum
      sum = sum + element;
    }
  }
  return sum;
}

// Usage Example:
let result = getArraySum([22, 33, 2, 6, 55, 44, 33, 9]);
console.log(result); // Output: 218
