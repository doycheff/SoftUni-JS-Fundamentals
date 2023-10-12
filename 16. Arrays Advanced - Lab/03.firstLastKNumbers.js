function firstLastKNumbers(arr) {
  let k = arr.shift();

  let firstKElements = arr.slice(0, k);
  let lastKElements = arr.slice(-k);
  console.log(firstKElements.join(" "));
  console.log(lastKElements.join(" "));
}
firstLastKNumbers([2, 7, 8, 9]);
firstLastKNumbers([3, 6, 7, 8, 9]);
