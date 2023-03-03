function solution(keymap, targets) {
    let answer = [];
    targets.map((el) => {
        let key = el.split('');
        let answerList = [];
        key.map((item) => {
            let list = [];
            for (let i = 0; i <keymap.length; i++) {
                list.push(keymap[i].indexOf(item));
            }
            if (Math.max(...list) === -1) return answerList.push(-1);
            else {
                if (list.includes(-1)) answerList.push(Math.max(...list) + 1);
                else answerList.push(Math.min(...list) + 1);
            }
        })
        console.log(answerList)
        answer.push(answerList.reduce((acc, cur) => acc + (cur === -1 ? cur : cur + 1), 0));
    })
    
    return answer;
}

let keymap = ["AGZ", "BSSS"];
let targets = ["V", "VC"];

console.log(solution(keymap, targets));