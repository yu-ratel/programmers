function solution(s) {
  let answer = '';
  let check = 1; 

  for (let i = 0; i < s.length; i ++) {
    if ((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) && check) {
        answer += String.fromCharCode(s[i].charCodeAt() - 32);
        check = 0;
    }
    else if (s[i] === " "){
      check = 1;
      answer += s[i];
    }
    else {
      if (!check && s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
        answer += String.fromCharCode(s[i].charCodeAt() + 32);
      }
      else answer += s[i];
      check = 0;
    }
  }
  
  return answer;
}
let s = "3people un2 Followed me";
console.log(solution(s));