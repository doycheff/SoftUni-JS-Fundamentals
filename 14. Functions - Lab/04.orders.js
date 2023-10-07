function orders(product, quantity) {
  switch (product) {
    case "coffee":
      quantity *= 1.5;
      break;
    case "water":
      quantity *= 1.0;
      break;
    case "coke":
      quantity *= 1.4;
      break;
    case "snacks":
      quantity *= 2.0;
      break;
  }
  console.log(quantity.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
