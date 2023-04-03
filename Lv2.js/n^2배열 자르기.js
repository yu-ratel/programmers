function solution(n, left, right) {
  let answer = [];
  let list = new Array(right - left + 1).fill(0);

  list.map((_, i) => {
    const target = i + left;
    answer.push(Math.max(target % n, Math.floor(target / n)) + 1);
  });
  return answer;
}

let n = 4;
let left = 7;
let right = 14;
console.log(solution(n, left, right));
//123 223 333

//0 ~ 3
//1 ~ 6
//2 ~ 9
