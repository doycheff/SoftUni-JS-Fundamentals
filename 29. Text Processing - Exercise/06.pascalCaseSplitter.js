function pascalCaseSplitter(str) {
    let text = str.split("");
    let storeArr = [];
    let addWord = [];

    for (let char of text) {
        if (/[A-Z]/.test(char)) {
            if (addWord.length > 0) {
                storeArr.push(addWord.join(""));
                addWord = [];
            }
            addWord.push(char);
        } else {
            addWord.push(char);
        }
    }

    if (addWord.length > 0) {
        storeArr.push(addWord.join(""));
    }

    console.log(storeArr.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
