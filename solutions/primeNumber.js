// Create a program to check if a given number is prime.

// I can help you create a JavaScript program to check if a given number is prime. A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself. Here's a simple program using a function to determine whether a number is prime or not...

function isPrime(number) {
  // Check if number is less then 2 or not
  if (number < 2) {
    console.log("number is less then 2");
    return false;
  }

  // Loop from 2 to the square root number
  for (let i = 2; i < Math.sqrt(number); i++) {
    // If the number is divisible by any number from 2 to its square root, it's not prime
    if (number % 2 === 0) {
      return false;
    }
  }

  // If the loop completes without finding a divisor, the number is prime
  return true;
}

// Test the function
const testNumber = 13;
if (isPrime(testNumber)) {
  console.log(`${testNumber} is a prime number`);
} else {
  console.log(`${testNumber} is not a prime number`);
}
