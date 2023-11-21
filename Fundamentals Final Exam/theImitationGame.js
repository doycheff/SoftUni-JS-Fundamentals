function theImitationGame(arr) {
    let message = arr.shift();
    for (let line of arr) {
        if (line == "Decode") {
            console.log(`The decrypted message is: ${message}`);
            return;
        } else {
            let tokens = line.split("|");
            let command = tokens.shift();

            if (command == "Move") {
                let numOfLetters = Number(tokens);

                message =
                    message.slice(numOfLetters) +
                    message.slice(0, numOfLetters);
            } else if (command == "Insert") {
                let idx = Number(tokens[0]);
                let value = tokens[1];

                message = message.slice(0, idx) + value + message.slice(idx);
            } else if (command == "ChangeAll") {
                let substring = tokens[0];
                let replacement = tokens[1];

                message = message.split(substring).join(replacement);
            }
        }
    }
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
    "owyouh",
    "Move|2",
    "Move|3",
    "Insert|3|are",
    "Insert|9|?",
    "Decode",
]);
