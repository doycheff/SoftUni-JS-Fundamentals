function meetings(arr) {
    let schedule = {};

    for (let contact of arr) {
        let [day, name] = contact.split(" ");

        if (day in schedule) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        schedule[day] = name;
        console.log(`Scheduled for ${day}`);
    }

    Object.entries(schedule).forEach((entry) =>
        console.log(entry.join(" -> "))
    );
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings([
    "Friday Bob",
    "Saturday Ted",
    "Monday Bill",
    "Monday John",
    "Wednesday George",
]);
