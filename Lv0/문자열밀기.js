function solution(A, B) {
  let tmp = A.split('');
  let cnt = 0;

  for (let i = 0; i < B.length; i += 1) {
    tmp.unshift(tmp.pop());
    cnt += 1;
    if (tmp.join('') === B) break;
  }

  if (cnt === A.length) {
    if (tmp.join('') === B) return 0;
    else return -1;
  }

  return cnt;
}

let A = "apple";
let B = "elppa";

console.log(solution(A, B));

// let solution=(a,b)=>(b+b).indexOf(a) 참조풀이 