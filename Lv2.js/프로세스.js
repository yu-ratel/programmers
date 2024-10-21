function solution(pr, lo) {
  let answer = 0;

  while (true) {
    let cl = pr.shift();

    if (Math.max(...pr) > cl) {
      pr.push(cl);
      if (lo === 0) lo = pr.length - 1;
      else lo--;
    } else {
      answer++;
      if (lo === 0) break;
      else lo--;
    }
  }
  return answer;
}

let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
