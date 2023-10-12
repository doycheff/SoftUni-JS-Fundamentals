function negativePositiveNumbers(arr) {
  let result = [];

  for (let numAsStr of arr) {
    let num = Number(numAsStr);
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  console.log(result.join("\n"));
}
negativePositiveNumbers(["7", "-2", "8", "9"]);
console.log("-----");
negativePositiveNumbers(["3", "-2", "0", "-1"]);
