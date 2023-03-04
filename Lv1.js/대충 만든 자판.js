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
                let itemList = [];
                list.map((el) => el != -1 ? itemList.push(el) : null);
                answerList.push(Math.min(...itemList) + 1);
            }
        })
        if (answerList.includes(-1)) answer.push(-1);
        else answer.push(answerList.reduce((acc, cur) => acc + cur , 0));
    })
    return answer;
}

let keymap = 	["ABACD", "BCEFD"];
let targets = ["XD", "AB", "SDD"];

console.log(solution(keymap, targets));