function computerStore(arr) {
  let priceNoTax = 0;
  let clientType = arr.pop();

  for (let command of arr) {
    let price = Number(command);

    if (price <= 0) {
      console.log("Invalid price!");
      continue;
    }

    priceNoTax += price;
  }

  if (priceNoTax == 0) {
    console.log("Invalid order!");
  } else {
    let tax = priceNoTax * 0.2;
    let priceWithTax = tax + priceNoTax;

    if (clientType == "special") {
      priceWithTax *= 0.9;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
console.log("<----->");
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
console.log("<----->");
computerStore(["regular"]);
