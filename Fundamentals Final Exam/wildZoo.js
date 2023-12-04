function solve(arr) {
    let command = arr.shift();

    let animals = {};

    let hungryAnimals = {};

    while (command != "EndDay") {
        let tokens = command.split(": ");
        let action = tokens.shift();

        if (action == "Add") {
            let [name, food, area] = tokens.shift().split("-");
            food = Number(food);
            if (name in animals) {
                animals[name]["food"] += food;
            } else {
                animals[name] = { food, area };
            }
        } else {
            let [name, feedingFood] = tokens.shift().split("-");
            feedingFood = Number(feedingFood);
            if (name in animals) {
                animals[name]["food"] -= feedingFood;
            }

            if (name in animals) {
                if (animals[name]["food"] <= 0) {
                    delete animals[name];
                    console.log(`${name} was successfully fed`);
                }
            }
        }

        command = arr.shift();
    }

    if (Object.keys(animals).length > 0) {
        console.log("Animals:");

        for (let animal in animals) {
            if (animals.hasOwnProperty(animal)) {
                console.log(` ${animal} -> ${animals[animal]["food"]}g`);

                let area = animals[animal]["area"];
                if (area in hungryAnimals) {
                    hungryAnimals[area]++;
                } else {
                    hungryAnimals[area] = 1;
                }
            }
        }

        if (Object.keys(hungryAnimals).length > 0) {
            console.log("Areas with hungry animals:");

            for (let area in hungryAnimals) {
                if (hungryAnimals.hasOwnProperty(area)) {
                    console.log(`${area}: ${hungryAnimals[area]}`);
                }
            }
        }
    }
}
// solve([
//     "Add: Adam-4500-ByTheCreek",
//     "Add: Maya-7600-WaterfallArea",
//     "Add: Maya-1230-WaterfallArea",
//     "Feed: Jamie-2000",
//     "EndDay",
// ]);
solve([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay",
]);
// solve([
//     "Add: Bonie-3490-RiverArea",
//     "Add: Sam-5430-DeepWoodsArea",
//     "Add: Bonie-200-RiverArea",
//     "Add: Maya-4560-ByTheCreek",
//     "Feed: Maya-2390",
//     "Feed: Bonie-3500",
//     "Feed: Johny-3400",
//     "Feed: Sam-5500",
//     "EndDay",
// ]);
