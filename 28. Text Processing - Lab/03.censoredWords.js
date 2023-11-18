function censoredWords(text, word) {
    let censor = "*".repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censor);
    }

    console.log(text);
}
censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");
censoredWords("hello world hello", "hello");
