function stringSubstring(searchedWord, text) {
    let splitText = text.toLowerCase().split(" ");

    if (splitText.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
