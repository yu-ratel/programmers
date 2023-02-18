function solution(k, m, score) {
    let boxCount = Math.floor(score.length / m);
    if (boxCount === 0) return 0;
    const box = score.sort((a, b)=> b - a);
    const answerList = [];
    for (let i = 0; i < boxCount * m; i += m) {
        let boxList = [];
        for(let j = i; j < i + m; j++) {
            boxList.push(box[j]);
        }
        answerList.push(boxList);
    }
    return answerList.map((box) => Math.min(...box) * m).reduce((a, b)=> a + b);
}

let k = 4;
let m = 3;
score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));