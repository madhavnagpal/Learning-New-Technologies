// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
}

for (let index = 0; index < bills.length; index++) {
  const currTip = calcTip(bills[index]);
  tips.push(currTip);
  totals.push(bills[index] + currTip);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
  if (!arr.length) return -1;
  let totalSum = 0;
  for (let index = 0; index < arr.length; index++) {
    totalSum += arr[index];
  }
  return totalSum / arr.length;
}

console.log(calcAverage(totals));
