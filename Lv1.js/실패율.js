function solution(N, stages) {
  const answer = [];
  // 해결하지 못해서 시간을 쓴 부분 => sort()로는 10, 1이 정렬되지 않는다.
  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i += 1) {
    const cut = stages.lastIndexOf(i);

    if (cut === -1) {
      answer.push([0, i]);
      continue;
    }

    answer.push([(cut + 1) / stages.length, i]);
    stages = stages.slice(cut + 1, stages.length);
  }

  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });

  return answer.map((stage) => stage[1]);
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
