// Palindrome Check: Check if a given string is a palindrome.

function isPalindrome(str) {
   // Remove non-alphanumeric characters and convert to lowercase
   let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   // Compare the cleaned string with its reverse
   return cleanStr === cleanStr.split('').reverse().join('')
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama"));