function solution(strArr) {
  return strArr.map((arr, i) => i % 2 === 1 ? arr.toUpperCase() : arr.toLowerCase());
}

let strArr = ["AAA","BBB","CCC","DDD"];

console.log(solution(strArr));