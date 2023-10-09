function addSubtract(num1, num2, num3) {
  let sum = (a, b) => a + b;
  let subtract = (a, b) => a - b;

  let result1 = sum(num1, num2);
  let finalResult = subtract(result1, num3);

  console.log(finalResult);
}
addSubtract(23, 6, 10);
addSubtract(1, 17, 30);
addSubtract(42, 58, 100);
