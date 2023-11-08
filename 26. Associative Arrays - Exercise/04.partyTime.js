function partyTime(arr) {
    let reservationList = { VIP: [], Regular: [] };
    let guest = arr.shift();

    while (guest !== "PARTY") {
        if (!isNaN(guest[0])) {
            reservationList.VIP.push(guest);
        } else {
            reservationList.Regular.push(guest);
        }

        guest = arr.shift();
    }

    for (let guest of arr) {
        if (!isNaN(guest[0])) {
            let index = reservationList.VIP.indexOf(guest);

            reservationList.VIP.splice(index, 1);
        } else {
            let index = reservationList.Regular.indexOf(guest);

            reservationList.Regular.splice(index, 1);
        }
    }

    console.log(reservationList.VIP.length + reservationList.Regular.length);
    Object.values(reservationList).forEach((value) =>
        console.log(value.join("\n"))
    );
}
// partyTime([
//     "7IK9Yo0h",
//     "9NoBUajQ",
//     "Ce8vwPmE",
//     "SVQXQCbc",
//     "tSzE5t0p",
//     "PARTY",
//     "9NoBUajQ",
//     "Ce8vwPmE",
//     "SVQXQCbc",
// ]);

// console.log("-----------");
partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);
