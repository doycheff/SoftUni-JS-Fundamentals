function sorting(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  let toggle = { shift: "pop", pop: "shift" };
  let fn = "shift";

  while (arr.length) {
    result.push(arr[(fn = toggle[fn])]());
  }

  console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
