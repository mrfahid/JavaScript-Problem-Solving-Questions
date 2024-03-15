// problem is that find an biggest integer in an array;


// <<<<<<<<<<<<<  ✨ Biggest Int >>>>>>>>>>>>>>
/**
+ * Finds the biggest integer in the given array.
+ * @param {Array} array - An array of integers
+ * @return {number} The biggest integer in the array
+ */
// <<<<< Solutions >>>>>
function findBiggestInt(array) {
  let sortArray = array.sort((a, b) => a - b);
  // console.log(sortArray);
  let biggestInt = sortArray[sortArray.length - 1];
  return biggestInt
}

let array1 = findBiggestInt([5, 3, 22, 55, 44, 1, 0])
console.log(array1) 

