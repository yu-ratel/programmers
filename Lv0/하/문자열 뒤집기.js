const solution = (str, s, e) => {
  let leftStr = '';
  let tmp = '';
  let rightStr = str.slice(e + 1);

  str.split('').forEach((el, idx) => {
    if (idx < s) leftStr += el;
    if (idx >= s && idx <= e) tmp += el;
  });

  return leftStr + tmp.split('').reverse().join('') + rightStr;
}

let str = "Progra21Sremm3";
let s = 6; 
let e = 12;

console.log(solution(str, s, e));