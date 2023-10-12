function arrayManipulation(arr) {
  let numbers = arr[0].split(" ").map(Number);

  for (let i = 1; i < arr.length; i++) {
    let command = arr[i].split(" ");

    switch (command[0]) {
      case "Add":
        numbers.push(Number(command[1]));
        break;
      case "Remove":
        numbers = numbers.filter((x) => x != Number(command[1]));
        break;
      case "RemoveAt":
        numbers.splice(Number(command[1]), 1);
        break;
      case "Insert":
        numbers.splice(Number(command[2]), 0, Number(command[1]));
        break;
    }
  }
  console.log(numbers.join(" "));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
arrayManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
