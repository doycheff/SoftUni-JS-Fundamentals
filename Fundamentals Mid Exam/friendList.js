function friendList(arr) {
    let names = arr.shift().split(", ");
    let blacklistedNames = 0;
    let lostNames = 0;
    for (let line of arr) {
        let tokens = line.split(" ");
        let command = tokens[0];

        if (command == "Blacklist") {
            let name = tokens[1];

            if (names.includes(name)) {
                blacklistedNames++;
                let index = names.indexOf(name);
                names.splice(index, 1, "Blacklisted");
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command == "Error") {
            let index = Number(tokens[1]);
            if (index >= 0 && index < names.length) {
                if (
                    !(names[index] == "Lost" || names[index] == "Blacklisted")
                ) {
                    lostNames++;
                    console.log(`${names[index]} was lost due to an error.`);
                    names.splice(index, 1, "Lost");
                }
            }
        } else if (command == "Change") {
            let index = Number(tokens[1]);
            let newName = tokens[2];
            if (index >= 0 && index < names.length) {
                let curName = names.splice(index, 1, newName);
                console.log(`${curName} changed his username to ${newName}.`);
            }
        } else {
            console.log(`Blacklisted names: ${blacklistedNames}`);
            console.log(`Lost names: ${lostNames}`);
            console.log(names.join(" "));
        }
    }
}
friendList(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
console.log("----------");
friendList([
    "Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report",
]);
console.log("----------");
friendList([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report",
]);
