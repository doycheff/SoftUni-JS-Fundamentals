function thePianist(arr) {
    let numPieces = Number(arr.shift());
    let collection = [];

    for (let i = 0; i < numPieces; i++) {
        let [piece, composer, key] = arr.shift().split("|");
        collection.push(piece, composer, key);
    }

    let line = arr.shift().split("|");

    while (line != "Stop") {
        let command = line.shift();
        let [piece, composer, key] = line;

        switch (command) {
            case "Add":
                if (collection.includes(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection.push(piece, composer, key);
                    console.log(
                        `${piece} by ${composer} in ${key} added to the collection!`
                    );
                }
                break;
            case "Remove":
                if (collection.includes(piece)) {
                    let idx = collection.indexOf(piece);
                    collection.splice(idx, 3);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;
            case "ChangeKey":
                if (collection.includes(piece)) {
                    let idx = collection.indexOf(piece);
                    collection.splice(idx + 2, 1, composer);
                    console.log(`Changed the key of ${piece} to ${composer}!`);
                } else {
                    console.log(
                        `Invalid operation! ${piece} does not exist in the collection.`
                    );
                }
                break;
        }

        line = arr.shift().split("|");
    }

    for (let i = 0; i < collection.length; i += 3) {
        let piece = collection[i];
        let composer = collection[i + 1];
        let key = collection[i + 2];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }
}
thePianist([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
]);
// thePianist([
//     "4",
//     "Eine kleine Nachtmusik|Mozart|G Major",
//     "La Campanella|Liszt|G# Minor",
//     "The Marriage of Figaro|Mozart|G Major",
//     "Hungarian Dance No.5|Brahms|G Minor",
//     "Add|Spring|Vivaldi|E Major",
//     "Remove|The Marriage of Figaro",
//     "Remove|Turkish March",
//     "ChangeKey|Spring|C Major",
//     "Add|Nocturne|Chopin|C# Minor",
//     "Stop",
// ]);
