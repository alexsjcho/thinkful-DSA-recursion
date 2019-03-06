/*
Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.
*/

//Iterative Solution

function getBinaryVersion(number) {
  for (let i = 1 << 31; i > 0; i = i / 2) {
    if (n === i) {
      console.log("1");
    } else {
      console.log("0");
    }
  }
}
