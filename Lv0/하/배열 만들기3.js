function solution(arr, intervals) {
  return arr.slice(intervals[0][0], intervals[0][1] + 1).concat(arr.slice(intervals[1][0], intervals[1][1] + 1));
}

let arr = [1, 2, 3, 4, 5];
let intervals = [[1, 3], [0, 4]];

console.log(solution(arr, intervals));