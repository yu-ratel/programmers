function solution(s) {
    return `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;
}

let s = "-1 -2 -3 -4";
console.log(solution(s));