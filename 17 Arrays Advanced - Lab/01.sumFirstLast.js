function sumFirstLast(arr) {
  let lastNum = arr.pop();
  let firstNum = arr.shift();
  console.log(Number(lastNum) + Number(firstNum));
}
sumFirstLast(["20", "30", "40"]);
sumFirstLast(["5", "10"]);
