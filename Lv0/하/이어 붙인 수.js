function solution(num_list) {
  let [odd, even] = [0, 0];
  num_list.forEach((num) => {
    num % 2 === 0 ? even += num.toString() : odd += num.toString();
  });
  
  return Number(odd) + Number(even);
}

let num_list = [3, 4, 5, 2, 1];
console.log(solution(num_list));