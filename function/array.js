// write a function to add the sum of an array

function sumOfArray(numbers) {
  // console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
    console.log(number);
  }
  return sum;
}

const num = [2, 3, 4, 4, 5];
const result = sumOfArray(num);
console.log(result);
