// Camel Case Conversion: Convert a camel case string to space-separated words.
function camelToSpace(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
}

// Test case
console.log(camelToSpace("helloWorld"));  // Output: "hello World"
console.log(camelToSpace("convertCamelCaseToSpace"));  // Output: "convert Camel Case To Space"