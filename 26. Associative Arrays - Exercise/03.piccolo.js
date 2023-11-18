function piccolo(arr) {
    let parking = {};

    for (let line of arr) {
        let [command, carNumber] = line.split(", ");

        if (command == "IN") {
            parking[carNumber] = carNumber;
        } else if (command == "OUT") {
            delete parking[carNumber];
        }
    }

    if (Object.keys(parking) == 0) {
        console.log("Parking Lot is Empty");
    }

    Object.entries(parking)
        .sort()
        .forEach((entry) => console.log(entry[1]));
}
piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
