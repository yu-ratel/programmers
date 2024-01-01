function solution(my_string, m, c) {
  const array = [];
  my_string.split('').forEach((_, idx) => {
    if (idx % m === 0) array.push(my_string.slice(idx, m + idx));
  })

  return array.map((_, idx) => array[idx][c - 1]).join('');
}

let my_string = "ihrhbakrfpndopljhygc";
let m = 4;
let c = 2;

console.log(solution(my_string, m, c));