function train(arr) {
  let wagons = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));

  let maxCapacity = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let arrNew = arr[i].split(" ");
    let command = arrNew[0];
    let firstValue = arrNew[1];

    if (arrNew.length == 2 && command == "Add") {
      wagons.push(firstValue);
    } else {
      let passengers = Number(arrNew);

      for (let j = 0; j < wagons.length; j++) {
        if (passengers + wagons[j] <= maxCapacity) {
          wagons[j] += passengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
// train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
