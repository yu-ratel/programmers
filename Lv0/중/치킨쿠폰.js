function solution (chicken) {
  let answer = 0;
  let service = Math.floor(chicken / 10);
  let mod = chicken % 10;

  answer += service;
  service += mod;

  while (1) {
    mod = service % 10;
    service = Math.floor(service / 10);
    answer += service;
    
    if (service === 0) {
      break;
    }
    service += mod
  }

  return answer;
}

let chicken = 1081;

console.log(solution(chicken));