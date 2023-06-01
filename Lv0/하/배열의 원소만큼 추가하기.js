function solution(arr) {
  let answer = [];
  arr.map((el) => {
    let num = el;
    while (num) {
      num--;
      answer.push(el);
    }
  });
  return answer;
}

let arr = [5, 1, 6];
console.log(solution(arr));
