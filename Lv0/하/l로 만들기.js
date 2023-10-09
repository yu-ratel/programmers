function solution(myString) {
  return myString.split('').map((el) => el.charCodeAt() <= 108 ? 'l' : el).join('');
}

let myString = "abcdevwxyz";

console.log(solution(myString));
