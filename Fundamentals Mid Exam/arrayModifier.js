function arrayModifier(arr) {
  let numbers = arr.shift().split(" ").map(Number);

  for (let line of arr) {
    let tokens = line.split(" ");
    let command = tokens.shift();

    if (command == "end") {
      break;
    }

    if (command == "swap") {
      let index1 = tokens[0];
      let index2 = tokens[1];

      let [element1] = numbers.splice(index1, 1, numbers[index2]);
      numbers.splice(index2, 1, element1);
    } else if (command == "multiply") {
      let index1 = tokens[0];
      let index2 = tokens[1];

      numbers.splice(index1, 1, numbers[index1] * numbers[index2]);
    } else if (command == "decrease") {
      numbers = numbers.map((num) => num - 1);
    }
  }

  console.log(numbers.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
