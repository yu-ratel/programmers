function solution(a, b, n) {
    let answer = 0;
    let kip = 0;
    while (n >= a) {
        answer += Math.floor(n / a) * b;
        kip = (n % a)
        n = (Math.floor(n / a) * b) + kip;
    }
    return answer;
}

let a = 3;
let b = 1;
let n = 20;

console.log(solution(a, b, n));

// 남은병수(n)는 바꿔서 얻은 빈병과 바꾸지않았던 원래 남은 병까지도 함께 계산해야한다.