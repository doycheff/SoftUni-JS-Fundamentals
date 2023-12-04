function solve(arr) {
    let str = arr.shift();

    let command = arr.shift();

    while (command != "Finish") {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "Replace") {
            let [curChar, newChar] = tokens;

            let regex = new RegExp(curChar, "g");
            str = str.replace(regex, newChar);

            console.log(str);
        } else if (action == "Cut") {
            let [startIdx, endIdx] = tokens.map((val) => Number(val));

            if (startIdx >= 0 && endIdx < str.length) {
                str = str.substring(0, startIdx) + str.substring(endIdx + 1);

                console.log(str);
            } else {
                console.log("Invalid indices!");
            }
        } else if (action == "Make") {
            if (tokens[0] == "Upper") {
                str = str.toUpperCase();
                console.log(str);
            } else if (tokens[0] == "Lower") {
                str = str.toLowerCase();
                console.log(str);
            }
        } else if (action == "Check") {
            if (str.includes(tokens)) {
                console.log(`Message contains ${tokens}`);
            } else {
                console.log(`Message doesn't contain ${tokens}`);
            }
        } else if (action == "Sum") {
            let [startIdx, endIdx] = tokens.map((val) => Number(val));

            if (startIdx >= 0 && endIdx < str.length) {
                let substring = str.substring(startIdx, endIdx + 1);

                let asciiSum = 0;

                for (let i = 0; i < substring.length; i++) {
                    asciiSum += substring.charCodeAt(i);
                }

                console.log(asciiSum);
            } else {
                console.log("Invalid indices!");
            }
        }

        command = arr.shift();
    }
}
solve([
    "ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish",
]);
solve([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish",
]);
