function oddOccurrences(input) {
    let els = input.toLowerCase().split(" ");
    let wordCount = new Map();

    for (let firstEl of els) {
        let count = 0;
        for (let secondEl of els) {
            if (firstEl == secondEl) {
                count++;
            }
        }
        wordCount.set(firstEl, count);
    }

    let filteredArr = Array.from(wordCount.entries()).filter(
        ([word, count]) => count % 2 == 1
    );

    let result = [];

    for (let [word, num] of filteredArr) {
        result.push(word);
    }
    console.log(result.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
