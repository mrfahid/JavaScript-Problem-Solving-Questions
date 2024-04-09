// First Unique Character: Find the first non-repeating character in a string.

function firstUniqueChar(str) {
  let charCount = {}
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }
  for(let i = 0; i < str.length; i++) {
    if(charCount[str[i]] === 1) {
      return i
    }
  }
  return - 1 // If no unique character found
}

// Test cases
console.log(firstUniqueChar("leetcode"));  // Output: 0 (First 'l' is unique)
console.log(firstUniqueChar("loveleetcode"));  // Output: 2 (First 'v' is unique)