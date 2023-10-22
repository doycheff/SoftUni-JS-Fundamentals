function schoolLibrary(arr) {
    let books = arr.shift().split("&");

    for (let line of arr) {
        let tokens = line.split(" | ");
        let command = tokens[0];

        if (command == "Add Book") {
            let book = tokens[1];
            if (!books.includes(book)) {
                books.unshift(book);
            }
        } else if (command == "Take Book") {
            let book = tokens[1];
            if (books.includes(book)) {
                let index = books.indexOf(book);
                books.splice(index, 1);
            }
        } else if (command == "Swap Books") {
            let book1 = tokens[1];
            let book2 = tokens[2];
            if (books.includes(book1) && books.includes(book2)) {
                let index1 = books.indexOf(book1);
                let index2 = books.indexOf(book2);
                [books[index1], books[index2]] = [books[index2], books[index1]];
            }
        } else if (command == "Insert Book") {
            let book = tokens[1];
            if (!books.includes(book)) {
                books.push(book);
            }
        } else if (command == "Check Book") {
            let index = Number(tokens[1]);
            if (index >= 0 && index < books.length) {
                console.log(books[index]);
            }
        } else if (command == "Done") {
            console.log(books.join(", "));
        }
    }
}
schoolLibrary([
    "Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done",
]);
console.log("----------");
schoolLibrary([
    "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done",
]);
console.log("----------");
schoolLibrary([
    "War and Peace&Hamlet&Ulysses&MadameBovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done",
]);
