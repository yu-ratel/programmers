function solution(array, height) {
  let answer = 0;
  answer = array.filter((num) => num > height);

  return answer.length;
}

const array = [[149, 180, 192, 170], [180, 120, 140]];
const height = [167, 190];

array.map((num,index) => {
  console.log(solution(num, height[index]))
})
