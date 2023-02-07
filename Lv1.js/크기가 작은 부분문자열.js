function solution(t, p) {
    let answer = 0;
    let cut = p.length;
    for (let i = 0; i <t.length - cut; i++) {
        let num = t.slice(i, i + cut);
        if (Number(num) <= Number(p)) answer++;
    }   
    return answer;
}

let t = "3141592";
let p =	"271";

console.log(solution(t, p));