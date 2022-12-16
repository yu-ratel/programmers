function solution(n, k) {
  const lambSkewers = 12000 * n;
  const drink = 2000 * k;
  const service = parseInt(n / 10) * -2000;

  return lambSkewers + drink + service; 
}

const n = [10, 64];
const k = [3, 6];

n.map((num, index) => {
  console.log(solution(num, k[index]));
})
