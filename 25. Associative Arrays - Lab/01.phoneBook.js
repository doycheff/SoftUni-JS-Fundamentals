function phoneBook(arr) {
    let contacts = {};

    for (let contact of arr) {
        let [name, phoneNumber] = contact.split(" ");

        contacts[name] = phoneNumber;
    }

    Object.entries(contacts).forEach((entry) =>
        console.log(entry.join(" -> "))
    );
}
phoneBook([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
]);
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
