function secretChat(arr) {
    let message = arr.shift();

    let line = arr.shift().split(":|:");

    while (line != "Reveal") {
        let command = line.shift();

        if (command == "InsertSpace") {
            let idx = Number(line[0]);
            message = message.slice(0, idx) + " " + message.slice(idx);

            console.log(message);
        } else if (command == "Reverse") {
            let substring = line[0];

            if (message.includes(substring)) {
                let idx = message.indexOf(substring);
                let secondPart = message
                    .substring(idx, idx + substring.length)
                    .split("")
                    .reverse()
                    .join("");
                let firstPart = message.substring(0, idx);
                let thirthPart = message.substring(idx + substring.length);

                message = firstPart + thirthPart + secondPart;

                console.log(message);
            } else {
                console.log("error");
            }
        } else if (command == "ChangeAll") {
            let substring = line[0];
            let replacement = line[1];

            message = message.split(substring).join(replacement);

            console.log(message);
        }

        line = arr.shift().split(":|:");
    }

    console.log(`You have a new text message: ${message}`);
}
secretChat([
    "heVVodar!gniV",
    "ChangeAll:|:V:|:l",
    "Reverse:|:!gnil",
    "InsertSpace:|:5",
    "Reveal",
]);
console.log("-------------------------");
secretChat([
    "Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal",
]);
