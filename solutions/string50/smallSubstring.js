// Smallest Substring: Find the smallest substring containing all characters of a pattern.

function smallestSubstring(s, t) {
  let charCount = {};
  for (let char of t) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let left = 0;
  let minStart = 0;
  let minLength = Infinity;
  let count = t.length;

  for (let right = 0; right < s.length; right++) {
    if (charCount[s[right]] !== undefined) {
      charCount[s[right]]--;
      if (charCount[s[right]] >= 0) {
        count--;
      }
    }

    while (count === 0) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      if (charCount[s[left]] !== undefined) {
        charCount[s[left]]++;
        if (charCount[s[left]] > 0) {
          count++;
        }
      }
      left++;
    }
  }
  return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
}

// Test case
console.log(smallestSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(smallestSubstring("DEBANC", "ABC")); // Output: "BANC"
console.log(smallestSubstring("SHAHFAHID", "FAHID")); // Output: "FAHID"
