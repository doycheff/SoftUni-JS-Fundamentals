function sortAnArrayByTwoCriteria(arr) {
  let result = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(result.join("\n"));
}
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
console.log("------");
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
