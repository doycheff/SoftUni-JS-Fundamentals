function manOWar(arr) {
  let pirate = arr.shift().split(">").map(Number);
  let warship = arr.shift().split(">").map(Number);
  let maxHP = Number(arr.shift());
  let critical = maxHP * 0.2;

  for (let line of arr) {
    let tokens = line.split(" ");
    let command = tokens.shift();

    if (command == "Retire") {
      break;
    } else if (command == "Fire") {
      let idx = Number(tokens[0]);
      let damage = Number(tokens[1]);

      if (idx < 0 || idx >= warship.length) {
        continue;
      }

      warship[idx] -= damage;

      if (warship[idx] <= 0) {
        console.log("You won! The enemy ship has sunken.");
        return;
      }
    } else if (command == "Defend") {
      let start = Number(tokens[0]);
      let end = Number(tokens[1]);
      let damage = Number(tokens[2]);

      if (
        start < 0 ||
        start >= pirate.length ||
        end < 0 ||
        end >= pirate.length
      ) {
        continue;
      }

      for (let i = start; i <= end; i++) {
        pirate[i] -= damage;

        if (pirate[i] <= 0) {
          console.log("You lost! The pirate ship has sunken.");
          return;
        }
      }
    } else if (command == "Repair") {
      let idx = Number(tokens[0]);
      let health = Number(tokens[1]);

      if (idx < 0 || idx >= pirate.length) {
        continue;
      }

      pirate[idx] += health;

      if (pirate[idx] > maxHP) {
        pirate[idx] = maxHP;
      }
    } else if (command == "Status") {
      let damaged = pirate.filter((section) => section < critical);
      console.log(`${damaged.length} sections need repair.`);
    }
  }

  let pirateStatus = 0;
  let warshipStatus = 0;

  for (let section of pirate) {
    pirateStatus += section;
  }
  for (let section of warship) {
    warshipStatus += section;
  }

  console.log(`Pirate ship status: ${pirateStatus}`);
  console.log(`Warship status: ${warshipStatus}`);
}
manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
console.log("---");
manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
