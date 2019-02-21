// Write a function that takes an array that contains an unknown set of numbers as input, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example:

// Input: [1, 2, 3]
// Output: [2, 4, 6]

function doubleArrayItems(array) {
  let currentArray = array;
  if (array.length == 1) {
    return array[0] * 2;
  }
  let resultsArray = [];
  for (let i = 0; i < currentArray.length; i++) {
    resultsArray.push(doubleArrayItems([currentArray[i]]));
  }
  return resultsArray;
}

console.log(doubleArrayItems([1, 2, 3]));
