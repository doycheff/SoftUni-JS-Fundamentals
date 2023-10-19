function numbers(input) {
  let numbers = input.split(" ").map(Number);

  let avgSum = numbers.reduce((acc, val) => acc + val) / numbers.length;

  // let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }
  // let average = sum / numbers.length;

  let topNums = numbers
    .filter((number) => number > avgSum)
    .sort((a, b) => b - a)
    .slice(0, 5);

  if (topNums.length > 0) {
    console.log(topNums.join(" "));
  } else {
    console.log("No");
  }
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
