function solution(hp) {
  let cnt = 0; 
  cnt = Math.floor(hp / 5);
  hp %= 5;

  cnt += Math.floor(hp / 3);
  hp %= 3;

  return hp === 0 ? cnt : cnt += hp;
}

let hp = 23;

console.log(solution(hp));