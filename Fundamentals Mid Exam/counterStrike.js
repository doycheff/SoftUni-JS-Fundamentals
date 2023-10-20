function counterStrike(arr) {
  let energy = Number(arr.shift());
  let command = arr.shift();
  let wons = 0;

  while (command != "End of battle") {
    let distance = Number(command);

    if (energy >= distance) {
      wons++;
      energy -= distance;
    } else {
      console.log(
        `Not enough energy! Game ends with ${wons} won battles and ${energy} energy`
      );
      return;
    }

    if (wons % 3 == 0) {
      energy += wons;
    }

    command = arr.shift();
  }
  console.log(`Won battles: ${wons}. Energy left: ${energy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
