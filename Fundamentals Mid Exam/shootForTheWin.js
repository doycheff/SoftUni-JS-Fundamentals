function shootForTheWin(arr) {
    let numbers = arr.shift().split(" ").map(Number);
    let command = arr.shift();
    let count = 0;
    while (command != "End") {
        if (command < numbers.length && command >= 0) {
            let shotted = numbers[command];
            numbers[command] = -1;
            count++;

            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] == -1 || i == command) {
                    continue;
                }
                if (numbers[i] > shotted) {
                    numbers[i] -= shotted;
                } else {
                    numbers[i] += shotted;
                }
            }
        }
        command = arr.shift();
    }
    console.log(`Shot targets: ${count} -> ${numbers.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
