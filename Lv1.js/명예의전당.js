function solution(k, score) {
    let answer = [];
    let list = [];
    for (let i = 0; i < score.length; i++) {
        if (i >= k) {
            let top = list.sort((a, b) => a - b);
            if (top[0] < score[i]) {
                top.shift();
                top.push(score[i]);
                answer.push(Math.min(...top));
            }
            else answer.push(Math.min(...top));
            
        }
        else {
            list.push(score[i]);
            answer.push(Math.min(...list));
        }
    }
    return answer;
}

let k = 4;
let score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]

console.log(solution(k, score));