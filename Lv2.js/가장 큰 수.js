function solution(numbers) {
  let answer = [];
  let ch = Array.from({ length: numbers.length }, () => 0);
  let tmp = Array.from({ length: numbers.length }, () => 0);

  function DFS(L) {
    if (L === numbers.length) {
      answer.push(Number(tmp.join("")));
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = numbers[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return Math.max(...answer).toString();
}

let numbers = [3, 30, 34, 5, 9];

console.log(solution(numbers));
