// 피자 나눠 먹기 (1)

function solution(n) {
  const slice = 7;
  return Math.ceil(n / slice);
}

// 피자 나눠 먹기 (3)
function solution(slice, n) {
  return Math.ceil(n / slice);
}

const slice = [7, 4];
const n = [10, 12];

slice.forEach((num, index) => {
  console.log(solution(num, n[index]));
})


// Math.ceil 은 항상 반올림 해줌! 다 같은 문제라 마지막만 테스트케이스