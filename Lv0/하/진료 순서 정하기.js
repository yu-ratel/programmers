function solution(emergency) {
  let list = emergency.slice().sort((a, b) => b - a);
  
  return emergency.map((el) => list.indexOf(el) + 1);
}

let emergency = [3, 76, 24];

console.log(solution(emergency));