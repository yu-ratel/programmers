function solution(a, b) {
  let ab = (a +'') + (b + '');
  let ba = (b + '') + (a + '');
  
  return Math.max(ab, ba);
}

let a = 9;
let b = 91;

console.log(solution(a, b));