function solution(brown, yellow) {
  let sum = brown + yellow;
  for (let i = 3; i <= brown; i++) {
    if (sum % i === 0) {
      if ((sum / i - 2) * (i - 2) === yellow) {
        return [sum / i, i];
      }
    }
  }
}

let brown = 8;
let yellow = 1;

console.log(solution(brown, yellow));

// 카펫의 최소 높이 3 (i) 을 기준으로 yellow의 크기를 구하고 (높이 가로 - 2 === yellow)
// 크기에 맞는 높이와 가로를 리턴
