function starEnigma(arr) {
    let msgsCount = Number(arr.shift());
    let decryptedMsgs = [];

    let starPattern = /[star]/gim;
    let planetPattern =
        /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldier>\d+)/;

    for (let i = 0; i < msgsCount; i++) {
        let msg = arr.shift([i]);
        let decryptedMsg = "";

        let match = msg.match(starPattern);

        if (match) {
            let count = match.length;

            for (let el of msg) {
                let code = el.charCodeAt() - count;
                decryptedMsg += String.fromCharCode(code);
            }
        } else {
            decryptedMsg = msg;
        }

        decryptedMsgs.push(decryptedMsg);
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let msg of decryptedMsgs) {
        let match = msg.match(planetPattern);

        if (match) {
            let { name, type } = match.groups;

            if (type == "A") {
                attackedPlanets.push(name);
            } else {
                destroyedPlanets.push(name);
            }
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
    "3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT",
    "EHfsytsnhf?8555&I&2C9555SR",
]);
