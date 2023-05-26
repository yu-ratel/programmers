function solution(sequence, k) {
  let [start, end, sum, idx] = [0, 0, 0, 0];
  let len = 1000000000;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === k) return [i, i];
    if (sequence[i] > k) break;

    sum += sequence[i];

    while (sum >= k) {
      if (sum === k && i - idx < len) {
        start = idx;
        end = i;
        len = i - idx;
      }
      sum -= sequence[idx];
      idx++;
    }
  }

  return [start, end];
}

let sequence = [2, 2, 2, 2, 2];
let k = 6;
console.log(solution(sequence, k));

//전형적인 투포인터 문제였으나 머리가 안돌아가서 꽤나 시간이 걸렸다..
//인덱스를 지정하는것에 대해서 깊게 생각해보면 좋을 것 같다.
