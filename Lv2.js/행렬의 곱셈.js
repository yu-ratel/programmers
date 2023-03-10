function solution(arr1, arr2) {
  let answer = [];
  arr1.map((el) => {
    let result = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < arr2.length; j++) {
        sum += el[j] * arr2[j][i];
      }
      result.push(sum);
    }
    answer.push(result);
  });
  return answer;
}

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arr2 = [
  [1, 4],
  [2, 5],
  [3, 6],
];

console.log(solution(arr1, arr2));

//arr1는 행으로 arr2는 열로
