function blackFlag(arr) {
  let [days, dailyPlunder, expectedPlunder] = arr.map(Number);
  let gainedPlunder = 0;

  for (let i = 1; i <= days; i++) {
    gainedPlunder += dailyPlunder;

    if (i % 3 == 0) {
      gainedPlunder += dailyPlunder / 2;
    }

    if (i % 5 == 0) {
      gainedPlunder *= 0.7;
    }
  }
  if (gainedPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${gainedPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (gainedPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
