function solution (scoville, k) {
  let answer = [];
  scoville = scoville.sort((a, b) => a - b);

  const newSum = (st, nd) => {
    return st > nd ? nd + (st * 2) : st + (nd * 2);
  }

  for (let i = 0; i < scoville.length - 1; i++) {
    let newScoville = 0;

    if (scoville[i] < k && scoville[i + 1]) {
      newScoville = newSum(scoville[i], scoville[i + 1]);
      scoville[i + 1] = newScoville;
      answer.push(newScoville);
    }
  }

  return answer[answer.length - 1] >= k ? answer.length : -1;
}
let scoville = [1, 2];
let k = 3;

console.log(solution(scoville, k));

// 우선순위 큐..?