function plantDiscovery(arr) {
    let num = Number(arr.shift());
    let plants = {};

    for (let i = 0; i < num; i++) {
        let [plant, rarity] = arr.shift().split("<->");
        rarity = Number(rarity);

        plants[plant] = { plant, rarity, rating: 0, count: 0 };
    }

    let currentRow = arr.shift();

    while (currentRow != "Exhibition") {
        let command = currentRow.split(` - `).join(` `).split(` `);

        if (plants.hasOwnProperty(command[1])) {
            if (command[0] == "Rate:") {
                let counter = 1;
                let plant = command[1];
                let rating = Number(command[2]);

                plants[plant][`rating`] += rating;
                plants[plant][`count`] += counter;
            } else if (command[0] == "Update:") {
                let plantT = command[1];
                let newRarity = Number(command[2]);

                plants[plantT][`rarity`] = newRarity;
            } else if (command[0] == "Reset:") {
                let resetPlant = command[1];
                plants[resetPlant][`rating`] = 0;
                plants[resetPlant][`count`] = 0;
            }
        } else {
            console.log("error");
        }

        currentRow = arr.shift();
    }

    console.log(`Plants for the exhibition:`);

    for (let key in plants) {
        let averageCount = plants[key][`rating`] / plants[key][`count`] || 0;
        console.log(
            `- ${key}; Rarity: ${
                plants[key][`rarity`]
            }; Rating: ${averageCount.toFixed(2)}`
        );
    }
}
plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition",
]);

plantDiscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition",
]);
