function treasureHunt(arr) {
  let loot = arr.shift().split("|");

  for (let line of arr) {
    if (line == "Yohoho!") {
      break;
    }

    let tokens = line.split(" ");
    let command = tokens.shift();

    if (command == "Loot") {
      // tokens
      //   .filter((item) => !loot.includes(item))
      //   .forEach((item) => loot.unshift(item));

      for (let line of tokens) {
        if (!loot.includes(line)) {
          loot.unshift(line);
        }
      }
    } else if (command == "Drop") {
      let idx = Number(tokens);
      if (idx >= 0 && idx < arr.length) {
        //check index is valid
        let drop = loot.splice(idx, 1);
        loot.push(drop);
      }
    } else if (command == "Steal") {
      let count = Number(tokens);
      let stolenItems = loot.splice(-count);
      console.log(stolenItems.join(", "));
    }
  }

  // let totalGain = 0;

  // for (let item of loot) {
  //   totalGain += item.length;
  // }
  // let avgGain = totalGain / loot.length;

  let avgGain = loot.reduce((sum, loot) => sum + loot.length, 0) / loot.length;

  if (loot.length > 0) {
    console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
  } else {
    console.log("Failed treasure hunt.");
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
