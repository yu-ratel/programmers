function solution(n) {
  let answer = [];

  const hanoi = (n, st, nd, rd) => {
    if (n === 1) answer.push([st, rd]);
    else {
      hanoi(n - 1, st, rd, nd); // 원판을 중간으로 옮기는 과정
      answer.push([st, rd]);
      hanoi(n - 1, nd, st, r  d); // 중간의 원판을 끝으로 옮기는 과정
    }
  };

  hanoi(n, 1, 2, 3);
  return answer;
}

let n = 3;
console.log(solution(n));
// 하노이의 법칙이 있던 문제였다.
// 재귀를 돌리면서 props 를 바꿔가며 원판을 옮겨주는 과정을 반복하여 답을 구할 수 있었다.
