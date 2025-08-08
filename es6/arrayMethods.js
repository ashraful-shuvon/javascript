const products = [
  { id: 1, name: "vivo", price: 1200, color: "black", brand: "vivo" },
  { id: 2, name: "IPhone", price: 121000, color: "blue", brand: "apple" },
  { id: 3, name: "Redmi", price: 12000, color: "gold", brand: "Xiaomi" },
  { id: 4, name: "Apple", price: 13000, color: "red", brand: "apple" },
  { id: 5, name: "Oppo", price: 1400, color: "black", brand: "Oppo" },
  { id: 6, name: "Galaxy", price: 120000, color: "silver", brand: "Samsung" },
];

// const newProducts = products.map((product) =>
//   console.log(product.name, "==", product.price)
// );

// const updatePrice = products.map((product) => {
//   if (product.brand === "apple") {
//     product.price = product.price + 10000;
//   }
//   return product;
// });
// console.log(updatePrice);

// const singleProduct = products.find((p) => p.id === 3);
// console.log(singleProduct.color);
const [a, b] = [1, 2, 3, 4, 45, 5];
console.log(a + b);
