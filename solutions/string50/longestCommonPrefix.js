// Longest Common Prefix: Find the longest common prefix among an array of strings.

function longestCommonPrefix(strs) {
  if (strs.length === 0) return false;
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }
    prefix = prefix.slice(0, j);
  }
  return prefix;
}

// Test case
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["lower", "long", "logo"]));  // Output: "lo"