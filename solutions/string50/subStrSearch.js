// Substring Search: Find if a substring exists in a given string.

function substringSearch(str, sub) {
  for (let i = 0; i <= str.length - sub.length; i++) {
    let found = true;
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
}

// Test cases
console.log(substringSearch("hello world", "world")); // Output: true
console.log(substringSearch("hello world", "abc")); // Output: false
