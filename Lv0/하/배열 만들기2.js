function solution(l, r) {
  const answer = [];

  for (let i = l; i <= r; i ++ ) {
    let arr = (i + '').split('');

    if(arr.every((num) => num === '0' || num === '5')) {
      answer.push(i);
    }
  }

  return answer.length ?  answer : [-1];
}

let l = 5;
let r = 555;

console.log(solution(l, r));