function solve(arr) {
    let num = Number(arr.shift());

    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for (let i = 0; i < num; i++) {
        let match = pattern.exec(arr[i]);

        if (match) {
            let bossName = match.groups.name;
            let titleName = match.groups.title;

            console.log(`${bossName}, The ${titleName}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${titleName.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}
solve([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
]);
solve([
    "3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#",
]);
