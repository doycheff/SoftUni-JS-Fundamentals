function bonusScoring(arr) {
    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let bonus = Number(arr.shift());

    let maxAtt = 0;
    let maxBonus = 0;

    for (let i = 0; i < students; i++) {
        let attendances = arr[i];
        let totalBonus = (attendances / lectures) * (5 + bonus);

        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            maxAtt = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}
bonusScoring(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoring([
    "10",
    "30",
    "14",
    "8",
    "23",
    "27",
    "28",
    "15",
    "17",
    "25",
    "26",
    "5",
    "18",
]);
