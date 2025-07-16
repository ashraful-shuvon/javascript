// average of odd numbers in an array

function oddAvg(numbers) {
  const oddNums = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNums.push(number);
    }
  }
  for (const number of oddNums) {
    sum = sum + number;
  }
  const result = sum / oddNums.length;

  return result;
}

const numbers = [2, 3, 5, 1, 8, 7, 7];
const result = oddAvg(numbers);
console.log(result);
