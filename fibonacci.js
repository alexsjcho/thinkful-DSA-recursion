// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function getFibonacciSequence(number, array) {
  if (number === 1) {
    console.log(array);
    return number;
  } else if (number === 2) {
    return 1;
  } else {
    let sequenceNumber =
      getFibonacciSequence(number - 1, array) +
      getFibonacciSequence(number - 2, array);
    array.push(sequenceNumber);
    return sequenceNumber;
  }
  return getFibonacciSequence;
}

console.log(getFibonacciSequence(7, []));
