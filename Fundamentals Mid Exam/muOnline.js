function muOnline(arr) {
  let roomInfo = arr.split("|");

  let health = 100;
  let bitcoins = 0;

  let bestRoom = 0;

  for (let room of roomInfo) {
    bestRoom++;
    let tokens = room.split(" ");
    let command = tokens[0];
    let number = Number(tokens[1]);

    switch (command) {
      case "potion":
        let newHP = health + number <= 100 ? number : 100 - health;
        health += newHP;
        console.log(`You healed for ${newHP} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        bitcoins += number;
        console.log(`You found ${number} bitcoins.`);
        break;
      default:
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${bestRoom}`);
          return;
        }
        break;
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
