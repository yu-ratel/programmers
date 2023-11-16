const solution = (date1, date2 ) => {
  console.log( new Date(date1))
  return Number(date1.join('')) < Number(date2.join('')) ? 1 : 0;
}

const date1 = [2024, 10, 23];
const date2 = [2025, 10, 24];
console.log(solution(date1, date2));