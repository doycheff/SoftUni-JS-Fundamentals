function addAndSubtract(arr) {
  let modifiedArr = [];
  let sum = 0;
  let modSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    sum += arr[i];
    if (arr[i] % 2 == 0) {
      modifiedArr[i] = Number(arr[i] + i);
    } else {
      modifiedArr[i] = Number(arr[i] - i);
    }
  }
  for (let i = 0; i < modifiedArr.length; i++) {
    modifiedArr[i] = Number(modifiedArr[i]);
    modSum += modifiedArr[i];
  }
  console.log(modifiedArr);
  console.log(sum);
  console.log(modSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);
