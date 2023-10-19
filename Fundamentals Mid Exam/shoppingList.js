function shoppingList(arr) {
  let initialList = arr.shift().split("!");

  for (let line of arr) {
    if (line == "Go Shopping!") {
      break;
    }

    let tokens = line.split(" ");
    let command = tokens.shift();

    if (command == "Urgent") {
      for (let line of tokens) {
        if (!initialList.includes(line)) {
          initialList.unshift(line);
        }
      }
    } else if (command == "Unnecessary") {
      let idx = initialList.indexOf(String(tokens));
      if (initialList.includes(String(tokens))) {
        initialList.splice(idx, 1);
      }
    } else if (command == "Correct") {
      let oldItem = tokens[0];
      let newItem = tokens[1];

      if (initialList.includes(oldItem)) {
        let idx = initialList.indexOf(String(oldItem));
        initialList.splice(idx, 1, newItem);
      }
    } else if (command == "Rearrange") {
      let idx = initialList.indexOf(String(tokens));
      let drop = initialList.splice(idx, 1);
      initialList.push(String(drop));
    }
  }

  console.log(initialList.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
