function solution (arr) {
  let answer = arr.map((el) => {
    if (el >= 50 && el % 2 === 0) return el / 2;
    if (el < 50 && el % 2 === 1) return el * 2;
    return el;
  })

  return answer;
}

let arr = [1, 2, 3, 100, 99, 98];

console.log(solution(arr));