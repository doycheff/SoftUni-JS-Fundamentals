function passwordReset(arr) {
    let str = arr.shift();

    let command = arr.shift();

    while (command != "Done") {
        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == "TakeOdd") {
            str = str
                .split("")
                .filter((_, index) => index % 2 != 0)
                .join("");

            console.log(str);
        } else if (action == "Cut") {
            let [idx, length] = tokens.map((value) => Number(value));

            let substringToRemove = str.substring(idx, idx + length);

            str = str.replace(substringToRemove, "");
            console.log(str);
        } else if (action == "Substitute") {
            let [substring, substitute] = tokens;

            if (str.includes(substring)) {
                str = str.replace(new RegExp(substring, "g"), substitute);
                console.log(str);
            } else {
                console.log("Nothing to replace!");
            }
        }

        command = arr.shift();
    }

    console.log(`Your password is: ${str}`);
}
// passwordReset([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done",
// ]);
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
]);
