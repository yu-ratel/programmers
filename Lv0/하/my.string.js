function solution(rny_string) {
  return rny_string.split('').map((el) => el === 'm' ? 'rn' : el).join('');
}

let rny_string = "masterpiece";

console.log(solution(rny_string));