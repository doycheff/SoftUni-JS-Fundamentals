function nfs(arr) {
    let num = Number(arr.shift());

    let garage = {};

    for (let i = 0; i < num; i++) {
        let [car, mileage, fuel] = arr.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);

        garage[car] = { mileage, fuel };
    }

    let command = arr.shift();

    while (command != "Stop") {
        let tokens = command.split(" : ");
        let action = tokens.shift();
        let car = tokens.shift();

        if (action == "Drive") {
            let [distance, fuel] = tokens.map((value) => Number(value));

            if (garage[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                garage[car][`mileage`] += distance;
                garage[car][`fuel`] -= fuel;

                console.log(
                    `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
                );
            }

            if (garage[car].mileage >= 100000) {
                delete garage[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (action == "Refuel") {
            let refuel = Number(tokens);

            if (garage[car].fuel + refuel > 75) {
                refuel = 75 - garage[car].fuel;
            }

            garage[car][`fuel`] += refuel;

            console.log(`${car} refueled with ${refuel} liters`);
        } else if (action == "Revert") {
            let km = Number(tokens);

            garage[car][`mileage`] -= km;

            if (garage[car].mileage <= 10000) {
                garage[car][`mileage`] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${km} kilometers`);
            }
        }

        command = arr.shift();
    }

    for (let car in garage) {
        console.log(
            `${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`
        );
    }
}
// nfs([
//     "3",
//     "Audi A6|38000|62",
//     "Mercedes CLS|11000|35",
//     "Volkswagen Passat CC|45678|5",
//     "Drive : Audi A6 : 543 : 47",
//     "Drive : Mercedes CLS : 94 : 11",
//     "Drive : Volkswagen Passat CC : 69 : 8",
//     "Refuel : Audi A6 : 50",
//     "Revert : Mercedes CLS : 500",
//     "Revert : Audi A6 : 30000",
//     "Stop",
// ]);
nfs([
    "4",
    "Lamborghini Veneno|11111|74",
    "Bugatti Veyron|12345|67",
    "Koenigsegg CCXR|67890|12",
    "Aston Martin Valkryie|99900|50",
    "Drive : Koenigsegg CCXR : 382 : 82",
    "Drive : Aston Martin Valkryie : 99 : 23",
    "Drive : Aston Martin Valkryie : 2 : 1",
    "Refuel : Lamborghini Veneno : 40",
    "Revert : Bugatti Veyron : 2000",
    "Stop",
]);
