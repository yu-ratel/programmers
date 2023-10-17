function solution(str1, str2) {
  let answer = '';
  let idx = 0;

  for (let i = 0; i < str1.length; i++) {
    answer += str1[idx];
    answer += str2[idx];
    idx++;
  }

  return answer;
}