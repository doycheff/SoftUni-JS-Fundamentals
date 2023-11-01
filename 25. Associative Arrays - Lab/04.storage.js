function storage(arr) {
    let map = new Map();

    for (let item of arr) {
        let [itemName, quantity] = item.split(" ");

        quantity = Number(quantity);

        if (map.has(itemName)) {
            map.set(itemName, map.get(itemName) + quantity);
        } else {
            map.set(itemName, quantity);
        }
    }

    map.forEach((quantity, itemName) => {
        console.log(`${itemName} -> ${quantity}`);
    });
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
