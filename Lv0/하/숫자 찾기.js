function solution(num, k) {
  return num.toString().indexOf(k) >= 0 ? num.toString().indexOf(k) + 1 : -1;
}