// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3

// Output:
// 3 - Another sheep jumps over the fence
// 2 - Another sheep jumps over the fence
// 1 - Another sheep jumps over the fence

function countSheep(curNumSheep) {
  if (curNumSheep === 0) {
    return "No more sheeps";
  } else {
    console.log(curNumSheep + " " + "Another sheep jumps over the fence");
    totalNumSheep = curNumSheep -= 1;
    countSheep(totalNumSheep);
  }
}
countSheep(3);
