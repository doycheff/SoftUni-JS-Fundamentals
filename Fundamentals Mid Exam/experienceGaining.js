function experienceGaining(arr) {
    let neededExperience = Number(arr.shift());
    let battleCount = Number(arr.shift());
    let count = 0;
    let collectedExp = 0;
    for (let expPerBattle of arr) {
        count++;
        if (count % 3 == 0) {
            collectedExp += expPerBattle * 1.15;
            continue;
        } else if (count % 5 == 0) {
            collectedExp += expPerBattle *= 0.9;
            continue;
        } else if (count % 15 == 0) {
            collectedExp += expPerBattle *= 1.05;
            continue;
        }
        collectedExp += expPerBattle;
        if (collectedExp >= neededExperience) {
            break;
        }
    }
    if (collectedExp >= neededExperience) {
        console.log(
            `Player successfully collected his needed experience for ${count} battles.`
        );
    } else {
        console.log(
            `Player was not able to collect the needed experience, ${(
                neededExperience - collectedExp
            ).toFixed(2)} more needed.`
        );
    }
}
experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
