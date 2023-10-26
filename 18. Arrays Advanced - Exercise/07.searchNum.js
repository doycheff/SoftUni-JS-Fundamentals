function searchNum(arr1, arr2) {
  let [takingNum, deletingNum, searchingNum] = arr2;

  let modArr = arr1.slice(0, takingNum);
  modArr.splice(0, deletingNum);

  let count = 0;

  for (let num of modArr) {
    if (num == searchingNum) {
      count++;
    }
  }

  console.log(`Number ${searchingNum} occurs ${count} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
