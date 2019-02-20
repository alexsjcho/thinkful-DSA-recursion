// Write a function that takes an array that contains an unknown set of numbers as input, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example:

// Input: [1, 2, 3]
// Output: [2, 4, 6]

function doubleArrayItems() {
  let doubleArray = [];
  let currentArray = [1, 2, 3];
  for (let i = 0; i > currentArray.length; i++) {
    if (doubleArray[2] === 6) {
      return "It is done";
    } else {
      doubleArray = currentArray * 2;
      doubleArrayItems(currentArray);
    }
  }
}

doubleArrayItems(1, 2, 3);
