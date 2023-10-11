function solution(arr, idx) {
  return arr.slice(idx).indexOf(1) >= 0 ? arr.slice(idx).indexOf(1) +idx : -1;
}

let arr = [0, 0, 0, 1];
let idx = 1;
console.log(solution(arr, idx));

//return arr.indexOf(1, idx);
// indexOf의 두번째 인자는 검색을 시작할 인덱스 <<< 