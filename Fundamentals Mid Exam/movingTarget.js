function movingTarget(arr) {
    let nums = arr.shift().split(" ").map(Number);

    for (let line of arr) {
        let tokens = line.split(" ");
        let command = tokens.shift();

        if (command == "Shoot") {
            let index = Number(tokens[0]);
            let power = Number(tokens[1]);

            if (index >= 0 && index < nums.length) {
                nums[index] -= power;
                if (nums[index] <= 0) {
                    nums.splice(index, 1);
                }
            }
        } else if (command == "Add") {
            let index = Number(tokens[0]);
            let value = Number(tokens[1]);

            if (index >= 0 && index < nums.length) {
                nums.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command == "Strike") {
            let index = Number(tokens[0]);
            let radius = Number(tokens[1]);
            if (
                index >= 0 &&
                index < nums.length &&
                radius >= 0 &&
                index - radius >= 0 &&
                index + radius < nums.length
            ) {
                nums.splice(index - radius, 2 * radius + 1);
            } else {
                console.log("Strike missed!");
                continue;
            }
        } else if (command == "End") {
            console.log(nums.join("|"));
        }
    }
}
movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
