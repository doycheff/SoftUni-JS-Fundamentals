function treasureHunt(arr) {
  let loot = arr.shift().split("|");
  let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

  for (let line of arr) {
    if (line == "Yohoho!") {
      break;
    }

    let tokens = line.split(" ");
    let command = tokens.shift();

    if (command == "Loot") {
      for (let line of tokens) {
        if (!loot.includes(line)) {
          loot.unshift(line);
        }
      }
    } else if (command == "Drop") {
      let idx = Number(tokens);
      if (isIndexValid(idx, loot)) {
        let drop = loot.splice(idx, 1);
        loot.push(String(drop));
      }
    } else if (command == "Steal") {
      let count = Number(tokens);
      let lastItems = loot.splice(-count);
      console.log(lastItems.join(", "));
    }
  }

  let total = loot.reduce((sum, loot) => sum + loot.length, 0) / loot.length;

  if (loot.length > 0) {
    console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
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
