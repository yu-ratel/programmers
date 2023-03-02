function factorial(num) {
    if (num < 0)
      return 1;
    else if (num == 0)
      return 1;
    else {
      return (num * factorial(num - 1));
    }
  }

function solution(balls, share) {
    let top = factorial(balls);
    let bottom = factorial(balls - share) * factorial(share);
    return Math.round(top / bottom);
}

let balls = 30;
let share = 15;

console.log(solution(balls, share)); 