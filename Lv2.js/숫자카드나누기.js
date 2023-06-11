function solution(arrayA, arrayB) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const max = (a, b) => {
    let max = 0;
    a.map((el) => (max = gcd(max, el)));

    if (b.some((el) => el % max === 0)) return 0;
    // 최대 공약수 max 가 하나라도 b 프롭스에 들어온 원소들과 나누어진다면 정답이 될 수 없기에 return 0
    return max;
  };

  let a = max(arrayA, arrayB);
  let b = max(arrayB, arrayA);

  return Math.max(a, b);
}

let arrayA = [14];
let arrayB = [5, 17];

console.log(solution(arrayA, arrayB));

// 고차함수를 생각하자 (some...)
