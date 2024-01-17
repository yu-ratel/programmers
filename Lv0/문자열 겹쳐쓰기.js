function solution(my_string, overwrite_string, s) {
  const answer = my_string.split('');

  answer.splice(s, overwrite_string.length, ...overwrite_string);

  return answer.join('');
}

let my_string = "He11oWor1d";
let overwrite_string = "lloWorl";
let s = 2;

console.log(solution(my_string, overwrite_string, s));