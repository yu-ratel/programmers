function solution(dot) {
  let x = dot[0];
  let y = dot[1];
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x > 0 && y < 0) return 4;
  return 3;
}

let dot = [2, 4];
console.log(solution(dot));
