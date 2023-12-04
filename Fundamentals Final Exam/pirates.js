function pirates(arr) {
    let cities = {};

    let command = arr.shift();

    while (command != "Sail") {
        let tokens = command.split("||");
        let [town, population, gold] = tokens;
        population = Number(population);
        gold = Number(gold);

        if (town in cities) {
            cities[town][`population`] += population;
            cities[town][`gold`] += gold;
        } else {
            cities[town] = { population, gold };
        }

        command = arr.shift();
    }

    let line = arr.shift();

    while (line != "End") {
        let tokens = line.split("=>");
        let command = tokens.shift();
        let town = tokens.shift();

        if (command == "Plunder") {
            let [people, stolenGold] = tokens.map((val) => Number(val));

            cities[town][`population`] -= people;
            cities[town][`gold`] -= stolenGold;

            console.log(
                `${town} plundered! ${stolenGold} gold stolen, ${people} citizens killed.`
            );

            if (cities[town][`population`] <= 0 || cities[town][`gold`] <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else {
            let addGold = Number(tokens);

            if (addGold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town][`gold`] += addGold;
                console.log(
                    `${addGold} gold added to the city treasury. ${town} now has ${
                        cities[town][`gold`]
                    } gold.`
                );
            }
        }

        line = arr.shift();
    }

    if (Object.keys(cities).length > 0) {
        console.log(
            `Ahoy, Captain! There are ${
                Object.keys(cities).length
            } wealthy settlements to go to:`
        );
        for (let cityName in cities) {
            console.log(
                `${cityName} -> Population: ${
                    cities[cityName][`population`]
                } citizens, Gold: ${cities[cityName][`gold`]} kg`
            );
        }
    } else {
        console.log(
            "Ahoy, Captain! All targets have been plundered and destroyed!"
        );
    }
}
// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End",
// ]);

pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End",
]);
