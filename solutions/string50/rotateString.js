// Rotate String: Rotate the characters of a string by a given offset.
function rotateString(str, offset) {
  offset = offset % str.length;
  const rotated = str.slice(offset) + str.slice(0, offset);
  return rotated;
}

// Test cases
console.log(rotateString("hello", 3));  // Output: "lohel"
console.log(rotateString("abcdef", 2));  // Output: "cdefab"
console.log(rotateString("shahfahid", 2));  // Output: "ahfahidsh"
