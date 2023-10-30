function storeProvision(stock, orderedProducts) {
    let localStore = {};
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        localStore[product] = quantity;
    }
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        if (product in localStore) {
            localStore[product] += quantity;
        } else {
            localStore[product] = quantity;
        }
    }

    let entity = Object.entries(localStore);

    for (let line of entity) {
        console.log(line.join(" -> "));
    }
}
// storeProvision(
//     ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//     [
//         "Flour",
//         "44",
//         "Oil",
//         "12",
//         "Pasta",
//         "7",
//         "Tomatoes",
//         "70",
//         "Bananas",
//         "30",
//     ]
// );
storeProvision(
    ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
    ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
