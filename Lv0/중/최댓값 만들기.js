function solution(numbers) {
  if (numbers.length === 2) return numbers[0] * numbers[1];

  const plus = numbers.filter((v) => v >= 0).sort((a, b) => a - b);
  const minus = numbers.filter((v) => v < 0).sort((a, b) => b - a);

  return minus.length >= 2
  ? Math.max(plus[plus.length - 1] * plus[plus.length - 2], minus[minus.length - 1] * minus[minus.length - 2])
  : plus[plus.length - 1] * plus[plus.length - 2];
}

let numbers = [0, 3, -2];

console.log(solution(numbers));

// 두개 나눠서 sort할 필요없이 한번에 sort하면 낮은수는 앞에 높은수는 뒤에 정렬되는걸 망각함
// ex) numbers.sort((a, b) => a - b) === [-2, 0, 3] 