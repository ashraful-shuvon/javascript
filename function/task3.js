// Write a function called make_avg() which will take an array of integers
// and the size of that array and return the average of those values.

function makeAvg(array, num) {
  let sum = 0;
  for (const number of array) {
    sum = sum + number;
  }
  const avg = sum / num;
  return avg.toFixed(2);
}

const numbers = [2, 3, 4, 5, 6, 6];
const result = makeAvg(numbers, numbers.length);
console.log(result);
