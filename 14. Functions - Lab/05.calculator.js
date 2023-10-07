function calculator(a, b, operator) {
  let operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
  console.log(operations[operator](a, b));
}
calculator(5, 5, "multiply");
calculator(40, 8, "divide");
calculator(12, 19, "add");
calculator(50, 13, "subtract");
