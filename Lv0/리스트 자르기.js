function solution(n, slicer, num_list) {
  if (n === 1) return num_list.slice(0, slicer[1] + 1);
  if (n === 2) return num_list.slice(slicer[0]);
  if (n === 3) return num_list.slice(slicer[0], slicer[1] + 1);

  return num_list.slice(slicer[0], slicer[1] + 1).filter((_, idx) => idx % slicer[2] === 0);
}

let n = 4;
let slicer = [1, 5, 2];
let num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(n, slicer, num_list));