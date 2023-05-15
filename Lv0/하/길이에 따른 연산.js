function solution(num_list) {
  if (num_list.length >= 11) return num_list.reduce((a, b) => a + b);
  else return num_list.reduce((a, b) => a * b);
}

let num_list = [2, 3, 4, 5];
console.log(solution(num_list));
