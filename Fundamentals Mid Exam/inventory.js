function inventory(arr) {
    let items = arr.shift().split(", ");

    for (let line of arr) {
        let tokens = line.split(" - ");
        let command = tokens[0];

        if (command == "Collect") {
            if (!items.includes(tokens[1])) {
                items.push(tokens[1]);
            }
        } else if (command == "Drop") {
            if (items.includes(tokens[1])) {
                let index = items.indexOf(tokens[1]);
                items.splice(index, 1);
            }
        } else if (command == "Combine Items") {
            //"Combine Items - {old_item}:{new_item}" - you should check if the old item exists.
            // If so, add the new item after the old one. Otherwise, ignore the command.;
            let combineItems = tokens.pop().split(":");
            let oldItem = combineItems[0];
            let newItem = combineItems[1];

            if (items.includes(oldItem)) {
                let index = items.indexOf(oldItem);
                items.splice(index + 1, 0, newItem);
            }
        } else if (command == "Renew") {
            let index = items.indexOf(tokens[1]);
            let renewItem = items.splice(index, 1);
            items.push(String(renewItem));
        } else {
            console.log(items.join(", "));
        }
    }
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
    "Iron, Sword",
    "Drop - Bronze",
    "Combine Items - Sword:Bow",
    "Renew - Iron",
    "Craft!",
]);
