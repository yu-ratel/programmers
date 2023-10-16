function solution(n){
  let up = n;
  
  while (up % 6 !== 0) {
    up+= n;
  }
  
  return up / 6;
}

let n = 4;
console.log(solution(n));