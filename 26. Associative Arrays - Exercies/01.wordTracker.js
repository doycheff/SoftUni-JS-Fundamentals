function wordTracker(arr) {
    let searchingWord = arr.shift().split(" ");
    let storeWord = {};

    for (let word of searchingWord) {
        storeWord[word] = 0;
    }
    for (let word of arr) {
        if (word in storeWord) {
            storeWord[word]++;
        }
    }
    Object.entries(storeWord)
        .sort((a, b) => b[1] - a[1])
        .forEach((entry) => console.log(entry.join(" - ")));
}
wordTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
wordTracker([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
]);
