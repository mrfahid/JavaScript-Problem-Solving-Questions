// problem is that find an biggest integer in an array;



// <<<<<<<<<<<<<  ✨ Biggest Int >>>>>>>>>>>>>>
/**
+ * Finds the biggest integer in the given array.
+ * 
+ * @param {Array} array - An array of integers
+ * @return {number} The biggest integer in the array
+ */
// <<<<< Solutions >>>>>
function findBiggestInt(array) {
  // Sort the array in ascending order
  let sortArray = array.sort((a, b) => a - b);
  // console.log(sortArray);

  // Find the biggest integer from the sorted array
  const biggestInt = sortArray[sortArray.length - 1];

  // Return the biggest integer
  return biggestInt;
}

// <<<<< Example: >>>>>
let result = findBiggestInt([5, 3, 22, 55, 44, 1, 0])
console.log(result) 

