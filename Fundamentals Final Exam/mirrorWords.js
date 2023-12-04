function mirrorWords(arr) {
    let parts = arr.shift();

    let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
    let match = pattern.exec(parts);

    let wordPairsCount = 0;
    let matchingWords = [];

    while (match) {
        wordPairsCount++;

        let leftPart = match[2];
        let rightPart = match[3];

        if (leftPart == rightPart.split("").reverse().join("")) {
            matchingWords.push(`${leftPart} <=> ${rightPart}`);
        }

        match = pattern.exec(parts);
    }

    if (wordPairsCount == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${wordPairsCount} word pairs found!`);
    }

    if (matchingWords.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(matchingWords.join(", "));
    }
}
mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
