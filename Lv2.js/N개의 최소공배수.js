function solution(arr) {
  let answer = 1;

  while (1) {
    if (arr.filter((el) => answer % el === 0).length === arr.length) {
      break;
    }
    answer++;
  }

  return answer;
}

let arr = [2, 6, 8, 14];

console.log(solution(arr));
