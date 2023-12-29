function solution(before, after) {
  const sortStr = (str) => {
    return str.split('').sort().join('');
  }

  return sortStr(before) === sortStr(after) ? 1 : 0;
}

let before = "olleh";
let after = "hello";

console.log(solution(before, after));