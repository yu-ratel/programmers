function solution (num_list) {
  const makeOne = (num) => {
    let count = 0;
    while(num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
        count += 1;
        continue;
      }
      if (num % 2 === 1) {
        num = (num - 1) / 2; 
        count += 1;
        continue;
      }
    }

    return count;
  }
  
  return num_list.reduce((acc, cur) => acc += makeOne(cur), 0);
}

let num_list = [12, 4, 15, 1, 14];

console.log(solution(num_list));