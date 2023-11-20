function furniture(input) {
    let items = [];
    let totalMoney = 0;

    let pattern = />>(?<item>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let command = input.shift();

    while (command != "Purchase") {
        let match = pattern.exec(command);

        if (match) {
            let { item, price, qty } = match.groups;

            totalMoney += Number(price) * Number(qty);

            items.push(item);
        }

        command = input.shift();
    }
    console.log(`Bought furniture:`);
    if (items.length > 0) {
        console.log(items.join("\n"));
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
// furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
// furniture([
//     ">>Laptop<<312.2323!3",
//     ">>TV<<300.21314!5",
//     ">Invalid<<!5",
//     ">>TV<<300.21314!20",
//     ">>Invalid<!5",
//     ">>TV<<30.21314!5",
//     ">>Invalid<<!!5",
//     "Purchase",
// ]);
furniture([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
