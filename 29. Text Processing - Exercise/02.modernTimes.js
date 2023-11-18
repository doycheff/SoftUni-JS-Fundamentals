function modernTimes(text) {
    let splitText = text.split(" ");

    for (let word of splitText) {
        if (word.startsWith("#") && word.length > 1) {
            let cleanedWord = word.substring(1);
            let isValid = true;

            for (let word of cleanedWord) {
                if (!/[A-Za-z]/.test(word)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(cleanedWord);
            }
        }
    }
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
console.log("----");
modernTimes(
    "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
