function signCheck(numOne, numTwo, numThree) {
  let multiplyOneTwo = numOne * numTwo;
  let result = multiplyOneTwo * numThree;

  return result >= 0 ? "Positve" : "Negative";
}

console.log(signCheck(5, 12, -15));
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
