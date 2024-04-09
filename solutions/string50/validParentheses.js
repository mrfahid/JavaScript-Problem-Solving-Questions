// Valid Parentheses: Check if a string containing only parentheses is valid.

function isValidParentheses(str) {
  let stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };
  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("([)]")); // Output: false
