function loadingBar(num) {
  let loadBar = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  for (let i = 0; i < num; i++) {
    if (i % 10 == 0) {
      loadBar.pop();
      loadBar.unshift("%");
    }
  }
  if (num == 100) {
    console.log(`${num}% Complete!`);
    console.log(`[${loadBar.join("")}]`);
  } else {
    console.log(`${num}% [${loadBar.join("")}]`);
    console.log("Still loading...");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
