function softUniReception(arr) {
  let studentsCount = Number(arr.pop());
  let studentsPerHour = arr.map(Number).reduce((sum, val) => sum + val, 0);

  let time = 0;

  while (studentsCount > 0) {
    time++;

    if (time % 4 == 0) {
      continue;
    }

    studentsCount -= studentsPerHour;
  }

  console.log(`Time needed: ${time}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
