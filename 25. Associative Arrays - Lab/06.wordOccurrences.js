function wordOccurrences(arr) {
    let map = new Map();

    for (let word of arr) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    sorted.forEach(([word, count]) => {
        console.log(`${word} -> ${count} times`);
    });
}
wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
]);
console.log("--------");
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
