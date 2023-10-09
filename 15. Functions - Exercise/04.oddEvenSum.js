function oddEvenSum(nums) {
  let oddSum = 0;
  let evenSum = 0;
  let numAsStr = String(nums).split("");

  for (let i = 0; i < numAsStr.length; i++) {
    let strToNum = Number(numAsStr[i]);

    if (strToNum % 2 == 0) {
      evenSum += strToNum;
    } else {
      oddSum += strToNum;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEvenSum(1000435);
oddEvenSum(3495892137259234);
