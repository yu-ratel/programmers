function solution (n) {
  const isDivisor = (num) => {
    let cnt = 1;

    for (let i = 2; i <= num; i++) {
      if (num % i === 0) cnt++;
    }

    return cnt >= 3 ? true : false; 
  }

  return Array(n).fill(0).map((v, i) => v = i + 1).filter((v) => isDivisor(v)).length;
}

let n = 10;

console.log(solution(n));