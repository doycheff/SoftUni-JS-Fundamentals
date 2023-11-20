function softUniBarIncome(input) {
    let command = input.shift();
    let totalPrice = 0;

    let pattern =
        /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    while (command != "end of shift") {
        let match = pattern.exec(command);

        if (match) {
            let { customer, product, count, price } = match.groups;

            let productPrice = Number(price) * Number(count);
            totalPrice += productPrice;

            console.log(`${customer}: ${product} - ${productPrice.toFixed(2)}`);
        }

        command = input.shift();
    }

    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
// softUniBarIncome([
//     "%George%<Croissant>|2|10.3$",
//     "%Peter%<Gum>|1|1.3$",
//     "%Maria%<Cola>|1|2.4$",
//     "end of shift",
// ]);
softUniBarIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift",
]);
