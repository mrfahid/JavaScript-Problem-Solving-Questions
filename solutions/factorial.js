// Write a function to calculate the factorial of a number.
// Factorial is a mathematical operation often used in programming and mathematics. It's denoted by an exclamation mark (!) and applied to a non-negative integer n. The factorial of n, represented as ! n!, is the product of all positive integers less than or equal to n.

// In programming, calculating factorials is often done using loops or recursive functions. Here's an example of a factorial function in JavaScript using recursion.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5)); // 5! = 5 x 4 x 3 x 2 = 120
console.log(factorial(4)); // 4! = 4 x 3 x 2 = 24

// If n is 0 or 1, the factorial is 1 (base case).
//  Otherwise, the factorial of n is calculated by multiplying n with the factorial of number − 1.
