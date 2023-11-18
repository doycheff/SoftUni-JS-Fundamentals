function revealWords(inputString, text) {
    let words = inputString.split(", ");

    let template = text.split(" ");

    for (let i = 0; i < template.length; i++) {
        if (template[i].includes("*")) {
            let matchingWord = words.find(
                (word) => word.length === template[i].length
            );

            if (matchingWord) {
                template[i] = matchingWord;
            }
        }
    }

    console.log(template.join(" "));
}
revealWords(
    "great",
    "softuni is ***** place for learning new programming languages"
);
revealWords(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);
