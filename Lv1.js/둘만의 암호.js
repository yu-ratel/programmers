function solution(s, skip, index) {
    let answer = '';
    skip = skip.split('').map((el) => el.charCodeAt());
    s = s.split('').map((el) => el.charCodeAt());
    s = s.map((el) => {
      let length = index;
      for (let i = 0; i < length; i++) {
        if (el === 122) el -= 26;
        el++;
        if (skip.includes(el)) length++;
      }
      answer += String.fromCharCode(el);
    }); 
    return answer;
}
let s = "zzzzzz";
let skip = "abcdefghijklmnopqrstuvwxy";
let index = 6;
console.log(solution(s, skip, index));