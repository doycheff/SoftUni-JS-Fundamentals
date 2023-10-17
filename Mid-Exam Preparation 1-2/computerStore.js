function computerStore(arr) {
  let priceWithoutTaxes = 0;
  let isSpecial = false;

  for (let el of arr) {
    if (el == "special") {
      isSpecial = true;
      break;
    } else if (el == "regular") {
      break;
    }
    if (el > 0) {
      let price = Number(el);
      priceWithoutTaxes += price;
    } else {
      console.log("Invalid price!");
    }
  }

  let taxes = priceWithoutTaxes * 0.2;
  let finalPrice = taxes + priceWithoutTaxes;
  let totalPrice = 0;

  if (isSpecial) {
    totalPrice = finalPrice * 0.9;
  } else {
    totalPrice = finalPrice;
  }

  if (totalPrice == 0) {
    console.log("Invalid order!");
    return;
  }

  console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log("-----------");
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
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
// computerStore(["regular"]);
