function solution(s) {
    let answer = 0;
    let target = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === target) count ++;
        else count --;
        
        if (count === 0) {
            i += 1; 
            target = s[i];
            answer += 1;
            count = 1;
        }
    }
    if (target) answer+= 1;
    return answer;
}

let s = "abracadabra";

console.log(solution(s));
