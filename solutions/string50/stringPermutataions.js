// String Permutations: Generate all permutations of a given string.

function stringPermutations(str) {
  let result = []
  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current)
      return
    }

    for(let i = 0; i < remaining.length; i++) {
      const next = current + remaining[i]
      const remainingChars = remaining.slice(0, i) + remaining.slice(i + 1)
      permute(next, remainingChars)
    }
  }
  permute('', str)
  return result
}

// Test case
console.log(stringPermutations("abc"));  // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]