// Write a function to calculate the area of a rectangle given its length and width.

const calculateRectangle = (length, width) => {
  // Check if length and width are positive numbers 
  if (length <= 0 || width <= 0) {
    return 'Length width must be positive numbers';
  }

  // Calculate area of rectangle
  return length * width;
}

let length = 5;
let width = 10;

let result = calculateRectangle(length, width);
console.log(result);