// 4. Reverse Words (Without Built-in Functions)
function reverseWords(str) {
    const reversedWords = [];
    let wordStart = null;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            const word = i === str.length - 1 ? str.substring(wordStart, i + 1) : str.substring(wordStart, i);
            reversedWords.unshift(word);
            wordStart = null;
        } else if (wordStart === null) {
            wordStart = i;
        }
    }
    return reversedWords.join(' ');
}

// Test case
console.log(reverseWords("Hello world"));  // Output: "world Hello"
