function solution(rep) {
  const win = {2: '0', 0: '5', 5: '2'};

  return rep.split('').map((v) => win[v]).join('');
}

let rep = "2";

console.log(solution(rep));