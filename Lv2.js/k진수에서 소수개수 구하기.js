function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = [];
  let number = n.toString(k);
  let num = "";

  for (let i = 0; i < number.length; i++) {
    if (Number(number[i]) === 0) {
      isPrime(num) ? answer.push(num) : null;
      num = "";
    } else {
      num += number[i];
    }
  }

  if (isPrime(num)) answer.push(num);
  return answer.length;
}

let n = 49;
let k = 10;
console.log(solution(n, k));
