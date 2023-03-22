function solution(n) {
  let ans = 0;
  let k = n;
  while (k) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = k - 1;
      ans++;
    }
  }
  return ans;
}

let n = 5000;
console.log(solution(n));

//구현문제 완탐해야할듯? 내일하자.
