// Find the friend with the smallest name.

const items = ["rahim", "robin", "rafi", "ron", "rashed"];

function getSmallestName(items) {
  let min = items[0];
  for (const item of items) {
    if (item.length < min.length) {
      min = item;
    }
  }
  return min;
}

console.log("Smallest name is: ", getSmallestName(items));
