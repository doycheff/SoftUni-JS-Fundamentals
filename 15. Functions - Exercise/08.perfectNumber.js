function perfectNumber(num) {
  let sum = 0;
  let isPerfect = true;

  for (let i = 1; i < num; i++) {
    sum += i;
    if (sum == num) {
      console.log("We have a perfect number!");
      return;
    } else {
      isPerfect = false;
    }
  }
  if (!isPerfect) {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);
