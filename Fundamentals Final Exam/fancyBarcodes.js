function fancyBarcodes(arr) {
    let num = Number(arr.shift());

    let pattern =
        /(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,})(?<end>[A-Z]@#+)/;
    let digPattern = /\d/g;

    for (let i = 0; i < num; i++) {
        let code = arr[i];
        let match = pattern.exec(code);

        if (match) {
            let name = match.groups.barcode;
            let digits = name.match(digPattern);

            let productGroup = digits ? digits.join("") : "";

            if (productGroup.length == 0) {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("----------------");
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
]);
