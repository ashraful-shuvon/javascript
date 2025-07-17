// find the min value of an array

const numbers = [30, 50, 54, 32, 12, 34, 12, 45, 54];

function minValue(numbers) {
  let min = numbers[0];
  for (item of numbers) {
    if (item <= min) {
      min = item;
    }
  }
  return min;
}
const result = minValue(numbers);
console.log(result);
