// Implement a function to reverse a string without using built-in methods.

function isReverse(str) {
  // Initialize an empty string to store the reversed string
  let reverseStr = "";

  // Loop trough all str chart and reversed
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  // return reversed String
  return reverseStr; 
}
// get result
const result = isReverse("javaScript problem solving");
console.log(result);// gnivlos melborp tpircSavaj

