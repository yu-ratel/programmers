function solution(X, Y) {
    let answer = '';
    const newX = X.split('');
    const newY = Y.split('');
    for (let i = 0; i < 10; i++) {
        const x = newX.filter(num => Number(num) === i).length
        const y = newY.filter(num => Number(num) === i).length
        answer += String(i).repeat(Math.min(x, y));
    }
    if (answer.length === 0) return "-1";
    if (Number(answer) === 0) return "0";
    else answer = answer.split('').sort((a, b) => b - a).join('');
    return answer;
}

let X = "5525";
let Y = "1255";

console.log(solution(X, Y));

//0~9 숫자를 이용해 0 보다 큰 수 중 수가 적은 것을 return 