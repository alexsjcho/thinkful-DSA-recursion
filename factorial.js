// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  //let previousFactorial = (number *(number -1));

  return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5));

function factorialIterative(number) {
  let factorialNumber = 1;
  for (let i = number; i > 0; i--) {
    console.log(factorialNumber);
    factorialNumber *= i;
  }

  return factorialNumber;
}

console.log(factorialIterative(5));
