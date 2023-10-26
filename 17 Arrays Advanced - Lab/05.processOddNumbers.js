function processOddNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let oddNum = 0;
    if (i % 2 == 1) {
      oddNum = String(Number(arr[i]) * 2);
      result.unshift(oddNum);
    }
  }
  console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
