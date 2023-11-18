function replaceRepeatingChars(str) {
    let resultString = "";

    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str[i] != str[i - 1]) {
            resultString += str[i];
        }
    }
    console.log(resultString);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
