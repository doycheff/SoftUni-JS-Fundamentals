function factorialDivision(num1, num2) {
  let factorial1 = calcFactorial(num1);
  let factorial2 = calcFactorial(num2);

  function calcFactorial(num) {
    let factorial = 1;
    while (num > 1) {
      factorial *= num;
      num--;
    }
    return factorial;
  }

  console.log((factorial1 / factorial2).toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);
