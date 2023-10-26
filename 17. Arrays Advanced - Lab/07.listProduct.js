function listProduct(arr) {
  let sortArr = arr.sort();

  for (let i = 0; i < sortArr.length; i++) {
    console.log(`${i + 1}.${sortArr[i]}`);
  }
}
listProduct(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listProduct(["Watermelon", "Banana", "Apples"]);
