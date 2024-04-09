// Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.

function longestSubstringWithoutRepeating(str) {
  const charIndexMap = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }

    charIndexMap[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
}

// Test cases
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3 (Substring: "abc")
console.log(longestSubstringWithoutRepeating("bbbbb")); // Output: 1 (Substring: "b")
console.log(longestSubstringWithoutRepeating("pwwkew")); // Output: 3 (Substring: "wke")
