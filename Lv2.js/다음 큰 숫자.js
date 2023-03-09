function solution(n) {
  let answer = 1;
  const numLength = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((el) => el === "1").length;
  };
  let answerNumber = numLength(n);

  while (answerNumber != numLength(n + answer)) {
    answer++;
  }

  return answer + n;
}

let n = 15;
console.log(solution(n));
