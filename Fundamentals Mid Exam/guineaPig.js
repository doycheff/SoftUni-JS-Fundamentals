function guineaPig(arr) {
  let food = arr[0] * 1000;
  let hay = arr[1] * 1000;
  let cover = arr[2] * 1000;
  let pigWeight = arr[3] * 1000;
  let day = 1;
  let isEnough = true;

  while (day <= 30) {
    food -= 300;

    if (day % 2 == 0) {
      let restFood = food * 0.05;
      hay -= restFood;
    }
    if (day % 3 == 0) {
      cover -= (pigWeight / 3).toFixed(2);
    }
    if (food <= 0 || hay <= 0 || cover <= 0) {
      isEnough = false;
      break;
    }
    day++;
  }
  if (isEnough) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
        2
      )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
    );
  } else {
    console.log("Merry must go to the pet store!");
  }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
