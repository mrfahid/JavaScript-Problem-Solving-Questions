//  Remove duplicate characters in a string using JavaScript without using built-in functions like Set or Array.prototype.filter.

function removeDuplicates(str) {
  let uniqueStr = ''
  for (const char of str) {
     // Check if the character is not already in the uniqueStr
     if (uniqueStr.indexOf(char) === -1) {
      uniqueStr += char
     }
  }
  return uniqueStr
}

// Test case
console.log(removeDuplicates("hello"));  // Output: "helo"
console.log(removeDuplicates("apple"));  // Output: "aple"
console.log(removeDuplicates("banana")); // Output: "ban"