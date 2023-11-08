function companyUsers(arr) {
    let infoObj = {};

    for (let companyInfo of arr) {
        let [companyName, employeeID] = companyInfo.split(" -> ");

        if (companyName in infoObj) {
            if (!infoObj[companyName].includes(employeeID)) {
                infoObj[companyName].push(employeeID);
            }
        } else {
            infoObj[companyName] = [employeeID];
        }
    }

    let entries = Object.entries(infoObj).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach((id) => {
            console.log(`-- ${id}`);
        });
    }
}
companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> BB12345",
    "Microsoft -> CC12345",
    "HP -> BB12345",
]);
console.log("-------------");
companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
]);
