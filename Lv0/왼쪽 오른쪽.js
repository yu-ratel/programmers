function solution(str_list) {
  const left = str_list.indexOf('l');
  const rigth = str_list.indexOf('r');
  const fristIndex = left > -1 && rigth > -1 ? Math.min(left, rigth) : Math.max(left, rigth);

  if (fristIndex === left) return str_list.slice(0, left);

  return str_list.slice(rigth + 1);
}

let str_list = ["r", 's'];

console.log(solution(str_list));