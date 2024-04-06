// 3. Count Vowels (Without Built-in Functions)

function isCountVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0
  for (const characters of str.toLowerCase()) {
    if(vowels.includes(characters)) {
      count++
    }
  }
  return count
}

// Test case
console.log(isCountVowels("Hello, how are you?"));  // Output: 6