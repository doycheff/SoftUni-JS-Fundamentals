function countStringOccurrences(text, searchedWord) {
    let splitText = text.split(" ");
    let count = 0;
    for (let word of splitText) {
        if (word == searchedWord) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences(
    "softuni is great place for learning new programming languages",
    "softuni"
);
