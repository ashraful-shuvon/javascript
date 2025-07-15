// return all the even numbers in an array

function allEvenNumbers(numbers) {
  let evenNumbers = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
      sum = sum + number;
    }
  }
  console.log("Sum of all even numbers: ", sum);
  return evenNumbers;
}

const num = [2, 4, 5, 6, 6, 7];
const result = allEvenNumbers(num);
console.log("Even numbers: ", result);
