function solution(ingredient) {
  let answer = 0;
  for (let i = 0; i <ingredient.length; i++) {
    if (ingredient[i] === 1) {
      if (ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
        answer++;
        ingredient.splice(i, 4);
        i -= 3;
      }
    }
  }
  return answer;
}

let ingredient = [1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1];

console.log(solution(ingredient));
// result = 2;
// 1 빵 
// 2 야채
// 3 고기 