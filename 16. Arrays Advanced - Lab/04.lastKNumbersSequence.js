function lastKNumbersSequence(n, k) {
  let arr = new Array(n);
  arr[0] = 1;

  let start = 0,
    end = 1,
    sum = 1;

  while (end < n) {
    if (end - start > k) {
      sum -= arr[start];
      ++start;
    }

    arr[end] = sum;
    sum += arr[end];
    ++end;
  }

  console.log(arr.join(" "));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
