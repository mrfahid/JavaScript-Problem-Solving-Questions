// Anagram Check: Check if two strings are anagrams of each other.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = {};
  for (const characters of str1) {
    charCount[characters] = (charCount[characters] || 0) + 1;
  }

  for (const characters of str2) {
    if (!charCount[characters]) {
      return false;
    }
    charCount[characters]--;
  }
  console.log(charCount);
  return true;
}

// Test cases
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
