function theLift(input) {
  let peopleInQueue = Number(input[0]);
  let liftState = input[1].split(" ").map(Number);

  for (let i = 0; i < liftState.length; i++) {
    while (liftState[i] < 4 && peopleInQueue > 0) {
      liftState[i]++;
      peopleInQueue--;
    }
  }
  let hasEmptySpots = false;
  for (let i = 0; i < liftState.length; i++) {
    if (liftState[i] < 4) {
      hasEmptySpots = true;
      break;
    }
  }

  if (peopleInQueue === 0 && hasEmptySpots) {
    console.log("The lift has empty spots!");
    console.log(liftState.join(" "));
  } else {
    if (peopleInQueue == 0) {
      console.log(liftState.join(" "));
      return;
    }
    console.log(
      `There isn't enough space! ${peopleInQueue} people in a queue!`
    );
    console.log(liftState.join(" "));
  }
}
theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
