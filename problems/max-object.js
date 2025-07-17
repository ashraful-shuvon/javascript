const phones = [
  { name: "Apple", price: 180000 },
  { name: "vivo", price: 10000 },
  { name: "xiaomi", price: 80000 },
  { name: "hwawei", price: 280000 },
  { name: "htc", price: 8000 },
];

function getHighest(phones) {
  let max = phones[0];
  for (const item of phones) {
    if (item.price > max.price) {
      max = item;
    }
  }

  return max;
}

console.log(getHighest(phones));
