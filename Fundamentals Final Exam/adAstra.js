function adAstra(arr) {
    let parts = arr.shift();

    let pattern =
        /(#|\|)(?<itemName>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let curMatches = parts.matchAll(pattern);
    let totalCalories = 0;
    let foodItems = [];

    for (let match of curMatches) {
        let itemName = match.groups.itemName;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        foodItems.push({ itemName, date, calories });
        totalCalories += calories;
    }

    let daysToLast = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${daysToLast} days!`);

    foodItems.forEach((item) => {
        console.log(
            `Item: ${item.itemName}, Best before: ${item.date}, Nutrition: ${item.calories}`
        );
    });
}

adAstra([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
    "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
