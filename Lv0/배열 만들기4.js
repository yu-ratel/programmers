function solution(arr) {
  let stk = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    }
    else if (stk && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    }
    else {
      i -= 1;
      stk.pop();
    }
  }

  return stk;
}

let arr = [1, 4, 2, 5, 3];

console.log(solution(arr));