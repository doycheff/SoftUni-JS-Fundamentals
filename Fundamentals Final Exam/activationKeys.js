function activationKeys(arr) {
    let key = arr.shift();

    let command = arr.shift();

    while (command != "Generate") {
        let tokens = command.split(">>>");
        let action = tokens.shift();

        if (action == "Contains") {
            if (key.includes(tokens)) {
                console.log(`${key} contains ${tokens}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (action == "Flip") {
            let [upLowCase, startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);

            let modStr = key.substring(startIdx, endIdx);

            if (upLowCase == "Upper") {
                modStr = modStr.toUpperCase();
            } else {
                modStr = modStr.toLowerCase();
            }

            key = key.slice(0, startIdx) + modStr + key.slice(endIdx);

            console.log(key);
        } else if (action == "Slice") {
            let [startIdx, endIdx] = tokens.map((value) => Number(value));

            let strToRemove = key.substring(startIdx, endIdx);

            key = key.replace(strToRemove, "");

            console.log(key);
        }

        command = arr.shift();
    }

    console.log(`Your activation key is: ${key}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
]);

activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate",
]);
