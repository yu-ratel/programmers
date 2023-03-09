function solution(s) {
  let count = remove = 0;
  while (s != '1') {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') zeroCount ++; 
      else oneCount++;
    }
    remove += zeroCount; 
    s = parseInt(oneCount).toString(2);
    count ++;
  }
  return [count, remove];
}

let s = "110010101001";
console.log(solution(s))