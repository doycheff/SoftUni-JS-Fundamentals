function employees(arr) {
    for (let employeeName of arr) {
        let employee = {
            name: employeeName,
        };

        console.log(
            `Name: ${employee.name} -- Personal Number: ${employee.name.length}`
        );
    }
}
employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
console.log("---------");
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
