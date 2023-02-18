function solution(s) {
    let answer = [];
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] == s[j]) {
                answer.push(i - j);
                break;
            }
            if (j == 0) answer.push(-1)
        }
        if (i == 0) answer.push(-1)
        }
    return answer.reverse();
}

let s = "foobar";

console.log(solution(s));